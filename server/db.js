require('dotenv').config()
const mongoose = require("mongoose");
const url = process.env.MONGOURL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({

  title: String,
  content: String,
});
const Post = mongoose.model("post", postSchema);

Post.find(function (err, res) {
    result.render("home", {
      startingContent: homeStartingContent,
      posts: res,
    });
  });


  const pdata = new Post({
    title: post.fetchedTitle,
    content: post.fetchedContent,
  });

  pdata.save(function (err) {

    if (!err) {
      res.redirect("/");
    }

    })


  Post.findById(passedID, function (err, res) {
        if (err) {
          console.log(err);
        } else {
          result.render("post", {
            title: res.title,
            content: res.content,
          });
        }
      });