//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

try {
    mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });
} catch (err) {
    console.log('Error while creating mongoDb connection :' + err);
}

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

app.get("/articles", function (req, res) {
    console.log("inside /articles view");

    // first parameter of find should be query, but in this case are are trying to retieve all the 
    // records that why we did add a first parameter in find
    Article.find(function (err, foundArticles) {
        if (!err) {
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
});

app.post("/articles", function (req, res) {

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(function(err){
        if(!err){
            res.send("Successfully added a new article");
        } else {
            res.send(err);
        }
    });
});

app.delete("/articles", function(req, res){
    Article.deleteMany(function(err){
        if(!err){
            res.send("Successfully deleted all articles");
        } else {
            res.send(err);
        }
    });
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});