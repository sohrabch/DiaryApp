const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const vinSchema = new mongoose.Schema({
    vin : String , 
    regnum : String , 
})

const Car = mongoose.model("vinnum" , vinSchema) ;
let url = process.env.MONGOURL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

router.post("/searchvin" , function(req, result ) {
    vins =  req.body.vinNumber
    regs =  req.body.regNumber
    vinsupper =  vins.toUpperCase()
    regsupper = regs.toUpperCase() 
    
    const data = {
        vinNumber : vinsupper , 
        regNum : regsupper , 

    }
    if (data.regNum == ""){
    Car.findOne( { "vin" : data.vinNumber }, function (err,res) {
        if(!err){
            console.log(res)
            if( res != null) {
                 result.status(200).json({
                    message : "vin number found. please take your car to the nearest dealer",
                  });
            }
            else {
                result.status(200).json({
                    message : "Your car was  not found in the list. everything seems ok ",
                  });
            }
        }
        else{
            res.status(404).json({
                message : "internet connection is lost",
              });
        }


     })
    }

    else {

        Car.findOne( { "regnum" : data.regNum }, function (err,res) {
            if(!err){
                console.log(res)
                if( res != null) {
                     result.status(200).json({
                        message : "vin number found. please take your car to the nearest dealer",
                      });
                }
                else {
                    result.status(200).json({
                        message : "car not found in the list of needed cars",
                      });
                }
            }
            else{
                res.status(404).json({
                    message : "internet connection is lost",
                  });
            }
    
    
         })
    }
})

module.exports = router;
