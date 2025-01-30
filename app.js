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
app.post("/facts/create",async (req, res) => {
    const {fact, category, source, data, verified, addedBy, created, updated} = req.body;
    const fact1 = new Facts({
        fact: fact,
        category: category,
        source: source,
        data_discovered: data,
        is_verified: verified,
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
});

//Show route
app.get("/facts/:id",async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id);
    res.render("facts/show.ejs", {fact}); 
});

//Edit route
app.get("/facts/edit/:id",async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id);
    res.render("facts/edit.ejs", {fact});
});

//Update route
app.put("/facts/:id",async (req, res) => {
    const {id} = req.params;
    const {fact, category, source, data, verified, addedBy, updated} = req.body;
    await Facts.findByIdAndUpdate(id, {
        fact: fact,
        category: category,
        source: source,
        data_discovered: data,
        is_verified: verified,
        added_by: addedBy,
        updated_at: updated
    });
    res.redirect("/facts");
});

//Delete route
app.delete("/facts/delete/:id",async (req, res) => {
    const {id} = req.params;
    await Facts.findByIdAndDelete(id);
    res.redirect("/facts");
});

//root route
app.get("/", (req, res) => {
    res.send("Working");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});