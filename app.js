const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Facts = require("./models/fact.js");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");  
const {factSchema} = require("./schema.js");

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
app.post("/facts/create", wrapAsync(async (req, res) => {
    const {fact, category, source, data, addedBy, created, updated} = req.body;

    let result = factSchema.validate(req.body);
    console.log(result);
    if(result.error){
        throw new ExpressError(400, result.error);
    }

    const fact1 = new Facts({
        fact: fact,
        category: category,
        source: source,
        data_discovered: data,
        is_verified: req.body.is_verified ? ["true", "yes", "1"].includes(req.body.is_verified.toLowerCase()) : false,
        added_by: addedBy,
        created_at: created,
        updated_at: updated
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
app.put("/facts/:id", wrapAsync(async (req, res) => {
    const {id} = req.params;
    const {fact, category, source, data, addedBy, updated, image} = req.body;
    
    let result2 = factSchema.validate(req.body);
    //console.log(result);
    if(result2.error){
        throw new ExpressError(400, result2.error);
    }

    await Facts.findByIdAndUpdate(id, {
        fact: fact,
        category: category,
        source: source,
        related_img: image,
        data_discovered: data,
        is_verified: req.body.is_verified ? ["true", "yes", "1"].includes(req.body.is_verified.toLowerCase()) : false,
        added_by: addedBy,
        updated_at: updated
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