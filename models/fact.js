const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const factSchema = new Schema({
    fact: {
        type: String,
        require: true,
    },

    category: String,

    related_img: {
        type: String,
        default:"https://t3.ftcdn.net/jpg/04/88/99/76/360_F_488997602_h1R6iAp1cmAvCbkDi7ittibR4ku215Pm.jpg",
        set: (v) => v === "" ? "https://t3.ftcdn.net/jpg/04/88/99/76/360_F_488997602_h1R6iAp1cmAvCbkDi7ittibR4ku215Pm.jpg" : v,
    },

    source: String,

    data_discovered: String,

    is_verified: {
        type: Boolean,
        require:true,
        default:false,
    },

    added_by: {
        type: String,
        require: true,
    },

    created_at:{
        type: Date,
        defalut:Date.now(),
    },

    updated_at: {
        type: Date,
        default:null
    },

    reviews: [
        {
        type: Schema.Types.ObjectId,
        ref: "Review",
        }
    ],
});

factSchema.post("findOneAndDelete", async (fact) => {
    if(fact){
        await Review.deleteMany({ _id: {$in: fact.reviews}});
    }
})


const Fact = mongoose.model("Fact", factSchema);
module.exports = Fact;