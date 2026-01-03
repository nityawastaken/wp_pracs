const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");

const app = express();
app.use(express.json());

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdb");

// UPDATE user details
app.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email
            },
            { new: true }
        );

        if (!user) {
            return res.send("User not found");
        }

        res.json(user);
    } catch {
        res.send("Invalid user ID");
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
