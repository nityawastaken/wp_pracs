const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./user");

const app = express();
app.use(express.json());
app.use(cors());

// connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdb");

// GET all users
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
