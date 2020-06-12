const express = require("express");
require("dotenv").config();
const app = express();
const port = 80;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

///////////// DB ////////////////////////

const mongoose = require("mongoose");
let url = process.env.MONGOURL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  username: String,
});
const Post = mongoose.model("post", postSchema);

////////////////// query 1  post based on ID /////////////////////
app.post("/getpost", async function (req, res) {
  let postId = req.body.id;

  Post.findById(postId, function (err, query) {
    if (err) {
      console.log(err);
    } else {
      res.send([query.title, query.content, query.username]);
    }
  });
});

// Create a new Post ///////////////////////////////////

app.post("/createpost", async function (req, res) {
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
      res.send("succesfully added post");
    } else {
      res.send("error occured : " + err);
    }
  });
});

/////////////////////// Delete a Post /////////////

app.post("/deletepost", function (req, res) {
  id = req.body.id;
  Post.deleteOne({ _id: id }, function (err) {
    if (!err) {
      res.send("succesfully deleted");
    } else {
      res.send("unable to delete ! ");
    }
  });
});

////////////////////////// update a post /////////////
app.post("/updatepost", function (req, res) {
  id = req.body.id;
  username = req.body.username
  title = req.body.title
  content = req.body.content
  const qres =  Post.updateOne({ "_id" : id },{ "username" : username , "title" : title , "content" : content} , function (err, queryres) {
    if(!err){
      res.send("success !")

    }else {
      res.send("failed !")
    }
  });

       
});

///////////////////////// app Start ////////////////////////////////

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
