const express = require('express');
const router = express.Router();
require("dotenv").config();
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

///////////// DB Initilization ////////////////////////

const mongoose = require("mongoose");
let url = process.env.MONGOURL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  username: String,
  mood : String ,
  hashtag : String , 
  location : String , 
  weather : String ,
  date : String 
});
const Post = mongoose.model("post", postSchema);





////////////////// query 1  post based on ID /////////////////////


router.post('/getpost', (req, res, next) => {
   
    let postId = req.body.id;
  Post.findById(postId, function (err, query) {
     
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
       title :  query.title,
       content : query.content, 
        username : query.username
        
      });
    }
  });
 
});




// Create a new Post ///////////////////////////////////

router.post("/createpost", async function (req, res) {
    let title = req.body.title;
    let content = req.body.content;
    let username = req.body.username;
  
    const pdata = new Post({
      title: title,
      content: content,
      username: username,
    });
    pdata.save(function (err) {
      if (!err) {
        res.status(200).json({
            "message" : "succesfully added post"
        });
      } else {
        res.status(500).json({
            "message" : " error occured"
        });
      }
    });
  });
  
  /////////////////////// Delete a Post /////////////

  router.post("/deletepost", function (req, res) {
    id = req.body.id;
    Post.deleteOne({ _id: id }, function (err) {
        if (!err) {
            res.status(200).json({
                "message" : "succesfully deleted post"
            });
          } else {
            res.status(500).json({
                "message" : " error occured"
            });
          }
    });
  });
  
  ////////////////////////// update a post /////////////


router.post('/updatepost', (req, res, next) => {
  id = req.body.id;
  username = req.body.username
  title = req.body.title
  content = req.body.content
  const qres =  Post.updateOne({ "_id" : id },{ "username" : username , "title" : title , "content" : content} , function (err, queryres) {
    if(!err){
      res.status(200).json({
        "message" : " sucess"
    });
    }else {
      res.status(500).json({
        "message" : " error occured"
    });
    }
  });

});

//////////////////////////////////////

module.exports = router;