const express = require("express");
const app = express();
const port = 8000;

require("dotenv").config();

const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const pinRoutes = require("./routes/pin");
const savedRoutes = require("./routes/saved");

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb+srv://johnrutherford2510:"+process.env.MONGO_PASSWORD+"@cluster0.orbncnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        }
    )
    .then((x) => {
        console.log("Connected to Mongo!");
    })
    .catch((err) => {
        console.log(err);
    });

    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = "secretAgain";
    passport.use(
        new JwtStrategy(opts, function (jwt_payload, done) {
            User.findOne({_id: jwt_payload.identifier}, function (err, user) {
                // done(error, doesTheUserExist)
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                    // or you could create a new account
                }
            });
        })
    );


app.get("/", (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    res.send("Hello World");
});

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/pin", pinRoutes);
app.use("/saved", savedRoutes);


app.listen(port, () => {
    console.log("App is running on port " + port);
})
