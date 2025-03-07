//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const PORT = 8000;

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

const userSchema = {
    email: String,
    password: String
}

const User = new mongoose.model("User", userSchema);

// HOME
app.get("/", (req, res) => {
    res.render("home");
});

// LOGIN
app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username}, (err, foundUser)=>{
        if(err){
            console.log(err);
        } else if(foundUser){
            if(foundUser.password === password){
                res.render("secrets");
            }
        }
    });
});

// REGISTER 
app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    })

    newUser.save((err)=>{
        if(err){
            console.log(err);
        } else {
            res.render("secrets");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server stated on port ${PORT}`);
});
