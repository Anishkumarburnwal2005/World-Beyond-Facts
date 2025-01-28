const initData = require("./data");
const Facts = require("../models/fact");
const mongoose = require("mongoose");

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


const initDb = async () => {
    await Facts.deleteMany({});
    await Facts.insertMany(initData.data);
    console.log("Data was initialized");
};

initDb()
.then(() => {
    console.log("Databse was connected successfully");
})
.catch((err) => {
    console.log(err);
});
