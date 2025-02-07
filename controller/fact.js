const Facts = require("../models/fact");

module.exports.index = async (req, res) => {
    const allFacts = await Facts.find({});
    res.render("facts/index.ejs", {allFacts});
};

module.exports.renderNewForm = (req, res) => {
    res.render("facts/new.ejs");
};

module.exports.createNewFact = async (req, res) => {
    //const {fact, category, source, data_discovered, added_by, created_at} = req.body.factValidation;
    const url = req.file.path;
    const filename = req.file.filename;
    console.log(url, "..", filename);
    const fact1 = new Facts(req.body.factValidation);
    fact1.owner = req.user._id;
    fact1.related_img = {url, filename};
    await fact1.save();
    req.flash("success", "New Fact Cerated!");
    res.redirect("/facts");
};

module.exports.showFact = async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!fact){
        req.flash("error", "Fact you requested for doesn't exist!");
        res.redirect("/facts");
    }
    //console.log(fact.owner.username);
    res.render("facts/show.ejs", {fact}); 
};


module.exports.renderEditForm = async (req, res) => {
    const {id} = req.params;
    const fact = await Facts.findById(id);
    res.render("facts/edit.ejs", {fact});
};

module.exports.updateFact = async (req, res) => {
    const {id} = req.params;
    //const {fact, category, source, data_discovered, added_by, updated_at, related_img} = req.body.factValidation;

    const fact = await Facts.findByIdAndUpdate(id, req.body.factValidation);
    
    if(typeof req.file !== "undefined"){
        const url = req.file.path;
        const filename = req.file.filename;
        fact.related_img = {url, filename};
        fact.save();
    }
    req.flash("success", "Fact Updated!");
    res.redirect(`/facts/${id}`);
};

module.exports.destroyFact = async (req, res) => {
    const {id} = req.params;
    const deletedFact = await Facts.findByIdAndDelete(id);
    req.flash("success", "Fact Deleted!");
    console.log(deletedFact);
    res.redirect("/facts");
};