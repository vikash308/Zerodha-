const express = require("express")
const router = express.Router();
const { UserModel } = require("../model/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey";



router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPass = await bcrypt.hash(password,10)
        console.log("hashed pass :" , hashedPass)
        const newUser = new UserModel({ name, email, password: hashedPass });
        await newUser.save();
        res.json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ message: "Error registering user" });
    }
});



router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ message: "Invalid email or password" });
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
            expiresIn: "2h",
        });
        console.log("login successfull")
        res.json({
            message: "Login successful",
            token,
            user: { id: user._id, name: user.name, email: user.email },
        });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router