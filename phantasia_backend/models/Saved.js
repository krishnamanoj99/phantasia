//How to create a model
//  1. require mongoose
//  2. create a mongoose schema (structure)
//  3. adding the model to the database

const mongoose = require("mongoose");

const Saved = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    pins: [
        String,
    ],
});

const savedModel = mongoose.model("Saved", Saved);

module.exports = savedModel;