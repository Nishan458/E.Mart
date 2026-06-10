const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "signup.html"));
});

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "cart.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});

// Test API
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "E-Mart Server Running Successfully"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});