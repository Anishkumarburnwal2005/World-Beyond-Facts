const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const User = require("./user.js");

const factSchema = new Schema({
    fact: {
        type: String,
        require: true,
    },

    category: String,

    related_img: {
        url: String,
        filename: String,
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

    owner:  {
            type: Schema.Types.ObjectId,
            ref: "User",
    }
});

factSchema.post("findOneAndDelete", async (fact) => {
    if(fact){
        await Review.deleteMany({ _id: {$in: fact.reviews}});
    }
})


const Fact = mongoose.model("Fact", factSchema);
module.exports = Fact;