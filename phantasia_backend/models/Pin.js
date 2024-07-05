//How to create a model
//  1. require mongoose
//  2. create a mongoose schema (structure)
//  3. adding the model to the database

const mongoose = require("mongoose");

const Pin = new mongoose.Schema({
    URL: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
});

const pinModel = mongoose.model("Pin", Pin);

module.exports = pinModel;