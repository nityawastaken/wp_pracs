// first enter project directory, and run npm init -y
// then run: npm install express mongoose
// then create the js files
// then run: node server.js
// then check on postman

const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/userdb");

app.patch("/users/:id/email", async (req, res) => {
    const email = req.body.email;

    if (!email) {
        return res.send("Email required");
    }

    await User.findByIdAndUpdate(req.params.id, { email: email });

    res.send("Email updated");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
