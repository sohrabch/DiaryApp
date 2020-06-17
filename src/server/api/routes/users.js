const express = require('express');
const router = express.Router();
require("dotenv").config();
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name : String
    });
const User = mongoose.model("user", userSchema);

///////////// DB Initilization ////////////////////////

const mongoose = require("mongoose");
let url = process.env.MONGOURL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


///////////////////////  Create User
router.post('/register', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});



  
  app.post("/auth", function (req, res) {
     res.send("implement Auth here")
    })
  
  app.post("/logout" , function (req,res) {
    res.send("implement logout here")
  })
  
  app.post("/register" , function (req,res) {
     console.log(req.body)
     name = "soh"
    res.send("register user here " + name )
  })
  
  

module.exports = router;