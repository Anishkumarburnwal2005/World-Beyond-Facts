const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const Facts = require("../models/fact.js");
const {isLoggedIn, isOwner, validateFact} = require("../middleware.js");

//Index route
router.get("/",async (req, res) => {
    const allFacts = await Facts.find({});
    res.render("facts/index.ejs", {allFacts});
});

//New route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("facts/new.ejs");
});

//Create route
router.post("/create", isLoggedIn, validateFact, wrapAsync(async (req, res) => {
    //const {fact, category, source, data_discovered, added_by, created_at} = req.body.factValidation;

    const fact1 = new Facts(req.body.factValidation);
    fact1.owner = req.user._id;
    await fact1.save();
    req.flash("success", "New Fact Cerated!");
    res.redirect("/facts");
}));

//Show route
router.get("/:id",  wrapAsync(async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!fact){
        req.flash("error", "Fact you requested for doesn't exist!");
        res.redirect("/facts");
    }
    //console.log(fact.owner.username);
    res.render("facts/show.ejs", {fact}); 
}));

//Edit route
router.get("/edit/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id);
    res.render("facts/edit.ejs", {fact});
}));

//Update route
router.put("/:id", isLoggedIn, isOwner, validateFact, wrapAsync(async (req, res) => {
    const {id} = req.params;
    //const {fact, category, source, data_discovered, added_by, updated_at, related_img} = req.body.factValidation;

    await Facts.findByIdAndUpdate(id, req.body.factValidation);
    req.flash("success", "Fact Updated!");
    res.redirect(`/facts/${id}`);
}));

//Delete route
router.delete("/delete/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    const {id} = req.params;
    const deletedFact = await Facts.findByIdAndDelete(id);
    req.flash("success", "Fact Deleted!");
    console.log(deletedFact);
    res.redirect("/facts");
}));

module.exports = router;