const mongoose = require("mongoose");
let url = process.env.MONGOURL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const postSchema = new mongoose.Schema({
title: String,
content: String,
});
const Post = mongoose.model("post", postSchema);


exports.savePost = function(title , content) {
  result = ""
  const pdata = new Post({
    title: title,
    content: content,
  });
    pdata.save(function (err) {
  
      if (!err) {
        result = "succesfully added post"
        
      }
      else{
        result = "error occured : " + err 
      }
  
      })
  return result
  
    }


exports.findPost = function(passedID) {

  Post.findById(passedID, function (err, res) {
      
    if (err) {
          console.log(err);
        } else {
          console.log(res);
          return(res.title)
        }
      });
    }