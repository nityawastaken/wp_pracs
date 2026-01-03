const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");

const app = express();
app.use(express.json());

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdb");

// CREATE new user
app.post("/users", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    });

    await user.save();
    res.send("User created successfully");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
