const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");

const app = express();
app.use(express.json());

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdb");

// ✅ GET user by ID
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.send("User not found");
        }

        res.json(user);
    } catch {
        res.send("Invalid user ID");
    }
});

// ✅ DELETE user by ID
app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.send("User not found");
        }

        res.send("User deleted successfully");
    } catch {
        res.send("Invalid user ID");
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
