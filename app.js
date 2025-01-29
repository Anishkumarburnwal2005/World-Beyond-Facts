const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Facts = require("./models/fact.js");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));

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
    const babu = await fact1.save();
    console.log(babu);
    res.redirect("/facts");
});

//Show route
app.get("/facts/:id",async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id);
    res.render("facts/show.ejs", {fact}); 
});

//root route
app.get("/", (req, res) => {
    res.send("Working");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});