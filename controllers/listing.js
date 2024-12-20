const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const cloudinary = require("cloudinary").v2;

module.exports.index = async (req, res) => {
  let category = req.query.category;
  let search = req.query.search;
  const allListings = await Listing.find({});
  let filteredListings = allListings;

  if (category) {
    filteredListings = allListings.filter(
      (listing) => listing.category === category
    );
  } else if (search) {
    console.log(search);
    filteredListings = allListings.filter((listing) => {
      if (listing.country === search || listing.title === search) {
        return listing;
      }
    });
  }

  res.render("./listings/index.ejs", { allListings: filteredListings });
};

module.exports.renderNewForm = (req, res) => {
  // console.log(req.user);
  res.render("./listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist.");
    res.redirect("/listings");
  }
  // console.log(listing);
  res.render("./listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = response.body.features[0].geometry;

  let savedListing = await newListing.save();
  // console.log(savedListing);
  req.flash("success", "New Listing added.");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist.");
    res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("./listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);

  if (!listing || !listing.image || !listing.image.url) {
    req.flash("error", "Listing or image not found.");
    return res.redirect("/listings");
  }

  if (typeof req.file !== "undefined") {
    destroyImageFromCloudinary(listing.image.url);

    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  req.flash("success", "Listing updated.");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);

  // Check if the listing and its image exist
  if (!listing || !listing.image || !listing.image.url) {
    req.flash("error", "Listing or image not found.");
    return res.redirect("/listings");
  }

  let result = destroyImageFromCloudinary(listing.image.url);

  if (result === undefined) {
    req.flash("error", "Failed to delete the image from Cloudinary.");
    res.redirect("/listings");
  }

  // calling post middleware for deleting listing related reviews as well
  await Listing.findOneAndDelete({ _id: id });
  req.flash("success", "Listing deleted.");
  res.redirect("/listings");
};

const destroyImageFromCloudinary = async (imageUrl) => {
  const url = imageUrl;
  const parts = url.split("/");

  const publicIdWithExtension = parts.slice(7).join("/").split(".")[0];
  await cloudinary.uploader.destroy(publicIdWithExtension, (error, result) => {
    if (error) {
      console.error("Cloudinary error:", error);
      return error;
    }
  });
};
