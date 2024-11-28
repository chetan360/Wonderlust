const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingControler = require("../controllers/listing.js");

//index route
router.get("/", wrapAsync(listingControler.index));

//new
router.get("/new", isLoggedIn, listingControler.renderNewForm);

//create route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingControler.createListing)
);

//show route
router.get("/:id", wrapAsync(listingControler.showListing));

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingControler.editListing)
);

//update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingControler.updateListing)
);

//delete route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingControler.destroyListing)
);

module.exports = router;
