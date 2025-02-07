const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
//const Facts = require("../models/fact.js");
const {isLoggedIn, isOwner, validateFact} = require("../middleware.js");
const factController = require("../controller/fact.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage}); 

router
    .route("/")
    .get(factController.index)  //Index route
    .post(isLoggedIn, upload.single("factValidation[related_img]"),validateFact, wrapAsync(factController.createNewFact)); //create route
//New route
router.get("/new", isLoggedIn, factController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(factController.showFact))  //Edit route
    .put(isLoggedIn, isOwner, upload.single("factValidation[related_img]"), validateFact, wrapAsync(factController.updateFact)) //Update route
    .delete(isLoggedIn, isOwner, wrapAsync(factController.destroyFact));  //Delete route

//Edit route
router.get("/edit/:id", isLoggedIn, isOwner, wrapAsync(factController.renderEditForm));

module.exports = router;