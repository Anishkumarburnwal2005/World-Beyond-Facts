const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");  
const {factSchema} = require("../schema.js");
const Facts = require("../models/fact.js");

let validateListing = (req, res, next) => {

    if(req.body.factValidation && req.body.factValidation.is_verified){
        req.body.factValidation.is_verified = ["yes", "true", "1"].includes(req.body.factValidation.is_verified.toLowerCase());
    }else{ 
        req.body.factValidation.is_verified = false;
    }

    //console.log(req.body.factValidation.is_verified);
    let {error} = factSchema.validate(req.body);
    //console.log(error);
    if(error){
        throw new ExpressError(400, error.details[0].message);
    }else{
        next();
    }
};

//Index route
router.get("/",async (req, res) => {
    const allFacts = await Facts.find({});
    res.render("facts/index.ejs", {allFacts});
});

//New route
router.get("/new", (req, res) => {
    res.render("facts/new.ejs");
});

//Create route
router.post("/create", validateListing, wrapAsync(async (req, res) => {
    //const {fact, category, source, data_discovered, added_by, created_at} = req.body.factValidation;

    const fact1 = new Facts(req.body.factValidation);
    await fact1.save();
    req.flash("success", "New Fact Cerated!");
    res.redirect("/facts");
}));

//Show route
router.get("/:id", wrapAsync(async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id).populate("reviews");
    if(!fact){
        req.flash("error", "Fact you requested for doesn't exist!");
        res.redirect("/facts");
    }
    res.render("facts/show.ejs", {fact}); 
}));

//Edit route
router.get("/edit/:id", wrapAsync(async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id);
    res.render("facts/edit.ejs", {fact});
}));

//Update route
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    const {id} = req.params;
    //const {fact, category, source, data_discovered, added_by, updated_at, related_img} = req.body.factValidation;

    await Facts.findByIdAndUpdate(id, req.body.factValidation);
    req.flash("success", "Fact Updated!");
    res.redirect(`/facts/${id}`);
}));

//Delete route
router.delete("/delete/:id", wrapAsync(async (req, res) => {
    const {id} = req.params;
    const deletedFact = await Facts.findByIdAndDelete(id);
    req.flash("success", "Fact Deleted!");
    console.log(deletedFact);
    res.redirect("/facts");
}));

module.exports = router;