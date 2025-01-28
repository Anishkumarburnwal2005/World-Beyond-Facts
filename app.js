const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Facts = require("./models/fact.js");

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

// app.get("/test", async(req, res) => {
//     let sample = new Facts({
//         fact:"Bolo",
//         is_verified:true,
//         added_by:"Anish",
//     });
//     await sample.save();
//     console.log("Sample was saved.");
//     res.send("Successful");
// })

app.get("/", (req, res) => {
    res.send("Working");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});