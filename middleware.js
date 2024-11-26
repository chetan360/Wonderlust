module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in to create listing!");
    // store the redirect url
    req.session.redirectUrl = req.originalUrl;
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    // preserve the redirect url in locals
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
