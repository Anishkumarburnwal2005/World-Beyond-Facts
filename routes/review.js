const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Facts = require("../models/fact.js");
const Reviews = require("../models/review.js");
const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");
const reviewController = require("../controller/review.js");

//Review route
router.post("/", isLoggedIn, validateReview , wrapAsync(reviewController.createReview));

//Review delete
router.delete("/:reviewId", isLoggedIn, isAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;