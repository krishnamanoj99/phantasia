const express = require("express");
const router = express.Router();
const passport = require("passport");
const Pin = require("../models/Pin");
const User = require("../models/User");

router.post(
    "/create",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        // req.user gets the user because of passport.authenticate
        const {pinUrl} = req.body;
        // if (!pinUrl) {
        //     return res
        //         .status(301)
        //         .json({err: "Insufficient details to create pin."});
        // }
        console.log(pinUrl);
        
        const currentUser = req.user;
        currentUser.myPins.push(pinUrl);
        await currentUser.save();

        return res.status(200).json(currentUser);
    }
);

// Get route to get all pins I have published.
router.get(
    "/get/mypins",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const userId = req.user._id;

        const foundUser = await User.findOne(userId);
        const mypins = foundUser.myPins;
        

        return res.status(200).json({data: mypins});
    }
);

module.exports = router;