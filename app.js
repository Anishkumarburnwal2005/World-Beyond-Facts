const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Facts = require("./models/fact.js");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");  
const {factSchema} = require("./schema.js");

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
}

main()
.then(() => {
    console.log("Databse was connected successfully");
})
.catch((err) => {
    console.log(err);
});


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/factVault");
};

//Index route
app.get("/facts",async (req, res) => {
    const allFacts = await Facts.find({});
    res.render("facts/index.ejs", {allFacts});
});

//New route
app.get("/facts/new", (req, res) => {
    res.render("facts/new.ejs");
});

//Create route
app.post("/facts/create", validateListing, wrapAsync(async (req, res) => {
    const {fact, category, source, data_discovered, added_by, created_at} = req.body.factValidation;

    const fact1 = new Facts({
        fact: fact,
        category: category,
        source: source,
        data_discovered: data_discovered,
        is_verified: req.body.factValidation.is_verified,
        added_by: added_by,
        created_at: created_at,
        created_at: created_at,
    });

    await fact1.save();
    res.redirect("/facts");

    // const newFact = await new Facts(req.body.fact);
    // await newFact.save();
    // console.log(newFact);
    // res.redirect("/facts");
}));

//Show route
app.get("/facts/:id", wrapAsync(async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id);
    res.render("facts/show.ejs", {fact}); 
}));

//Edit route
app.get("/facts/edit/:id", wrapAsync(async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id);
    res.render("facts/edit.ejs", {fact});
}));

//Update route
app.put("/facts/:id", validateListing, wrapAsync(async (req, res) => {
    const {id} = req.params;
    const {fact, category, source, data_discovered, added_by, updated_at, related_img} = req.body.factValidation;

    await Facts.findByIdAndUpdate(id, {
        fact: fact,
        category: category,
        source: source,
        related_img: related_img,
        data_discovered: data_discovered,
        is_verified: req.body.factValidation.is_verified,
        added_by: added_by,
        updated_at: updated_at
    });

    res.redirect(`/facts/${id}`);
}));

//Delete route
app.delete("/facts/delete/:id", wrapAsync(async (req, res) => {
    const {id} = req.params;
    const impFact = await Facts.findByIdAndDelete(id);
    console.log(impFact);
    res.redirect("/facts");
}));

//root route
app.get("/", (req, res) => {
    res.send("Working");
});

app.get("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found."));
})

app.use((err, req, res, next) => {
    const {statusCode=500, message="Something went wrong."} = err;
    res.status(statusCode).render("errorPage/error.ejs" ,{message});
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});