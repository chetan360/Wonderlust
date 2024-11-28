const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingControler = require("../controllers/listing.js");

//index route
router
  .route("/")
  .get(wrapAsync(listingControler.index))
  .post(isLoggedIn, validateListing, wrapAsync(listingControler.createListing));

//new
router.get("/new", isLoggedIn, listingControler.renderNewForm);

//show route
router
  .route("/:id")
  .get(wrapAsync(listingControler.showListing))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingControler.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingControler.destroyListing));

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingControler.editListing)
);

module.exports = router;
