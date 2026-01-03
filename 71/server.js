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

// connect to MongoDB

mongoose.connect("mongodb://127.0.0.1:27017/userdb");

// ✅ GET USER BY ID
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.send("User not found");
        }

        res.json(user);
    } catch (error) {
        res.send("Invalid user ID");
    }
});

// (previous PATCH email API can stay here)

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
