const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Facts = require("../models/fact.js");
const Reviews = require("../models/review.js");
const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");

//Review route
router.post("/", isLoggedIn, validateReview , wrapAsync(async (req, res) => {
    let {id} = req.params;
    const fact = await Facts.findById(id);
    const newReview = new Reviews(req.body.review);
    newReview.author = req.user._id;
    //console.log(newReview);
    fact.reviews.push(newReview);
    await newReview.save();
    await fact.save();
    req.flash("success", "New Review Created!")
    res.redirect(`/facts/${id}`)
}));

//Review delete
router.delete("/:reviewId", isLoggedIn, isAuthor, wrapAsync(async (req, res) => {
    const {id, reviewId} = req.params;

    await Facts.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Reviews.findByIdAndDelete(reviewId);
    req.flash("success", "Review Delete!");
    res.redirect(`/facts/${id}`);
}));

module.exports = router;