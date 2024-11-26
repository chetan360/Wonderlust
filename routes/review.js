const express = require("express");
const router = express.Router({ mergeParams: true });
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { validateReview } = require("../middleware.js");

// router post route
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "New Review created.");
    res.redirect(`/listings/${listing._id}`);
  })
);

// delete review route
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    //update router arrays
    await Listing.findByIdAndUpdate(id, { $pull: { router: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted.");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
