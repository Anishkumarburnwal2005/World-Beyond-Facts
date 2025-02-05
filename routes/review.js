const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");  
const {reviewSchema} = require("../schema.js");
const Facts = require("../models/fact.js");
const Reviews = require("../models/review.js");

let validateReview = (req, res, next) => {

    let {error} = reviewSchema.validate(req.body);
    //console.log(error);
    if(error){
        throw new ExpressError(400, error.details[0].message);
    }else{
        next();
    }
}

//Review route
router.post("/",validateReview , wrapAsync(async (req, res) => {
    let {id} = req.params;
    const fact = await Facts.findById(id);
    const newReview = new Reviews(req.body.review);
    fact.reviews.push(newReview);
    await newReview.save();
    await fact.save();
    req.flash("success", "New Review Created!")
    res.redirect(`/facts/${id}`)
}));

//Review delete
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    const {id, reviewId} = req.params;

    await Facts.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Reviews.findByIdAndDelete(reviewId);
    req.flash("success", "Review Delete!");
    res.redirect(`/facts/${id}`);
}));

module.exports = router;