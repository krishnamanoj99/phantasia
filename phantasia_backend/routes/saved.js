const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const Pin = require("../models/Pin");
const Saved = require("../models/Saved");

const router = express.Router();

// Route 1: Create a saved collection
router.post(
    "/create",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const currentUser = req.user;
        const {name, thumbnail, pins} = req.body;
        if (!name || !thumbnail || !pins) {
            return res.status(301).json({err: "Insufficient data"});
        }
        const savedData = {
            name,
            thumbnail,
            pins,
            owner: currentUser._id,
        };
        const saved = await Saved.create(savedData);
        return res.status(200).json(saved);
    }
);

// Get all saved made by me
// /get/me
router.get(
    "/get/me",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const userId = req.user._id;

        const foundUser = await User.findOne(userId);
        const mypins = foundUser.pins;
        

        return res.status(200).json({data: mypins});
    }
);

router.get(
    "/get/liked",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const userId = req.user._id;

        const foundUser = await User.findOne(userId);
        const mypins = foundUser.liked;
        

        return res.status(200).json({data: mypins});
    }
);

// Add a song to a playlist
router.post(
    "/add/pin",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const currentUser = req.user;
        const {pinUrl} = req.body;
        currentUser.pins.push(pinUrl);
        await currentUser.save();

        return res.status(200).json(currentUser);
    }
);

//Like a pin
router.post(
    "/like/pin",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const currentUser = req.user;
        const {pinUrl} = req.body;
        currentUser.liked.push(pinUrl);
        await currentUser.save();

        return res.status(200).json(currentUser);
    }
);

module.exports = router;