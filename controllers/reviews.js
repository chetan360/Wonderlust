const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  console.log(req.params.id);
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  console.log(newReview);
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  req.flash("success", "New Review created.");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;

  //update router arrays
  await Listing.findByIdAndUpdate(id, { $pull: { router: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted.");
  res.redirect(`/listings/${id}`);
};
