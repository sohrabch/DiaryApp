const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});
const User = mongoose.model("user", userSchema);

///////////// DB Initilization ////////////////////////

let url = process.env.MONGOURL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

///////////////////////  Create User
router.post("/register", (req, res, next) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  };
  const udata = new User({
    email: data.email,
    password: data.password,
    name: data.name,
  });
  udata.save(function (err) {
    if (!err) {
      res.status(200).json({
        message: "succesfully added user",
      });
    } else {
      res.status(500).json({
        message: " error occured",
      });
    }
  });
});

////////////// auth users

router.post("/auth", function (req, res) {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  User.findOne({ email: data.email }, function (err, result) {
    if (!err) {
      if(result != null){
      if (result.password === data.password) {
        res.status(200).json({
          auth: true,
        });
      }
    }
      else{
        res.status(200).json({
          auth: false,
        });
      }
    }
  });
});

module.exports = router;
