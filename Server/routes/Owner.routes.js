import express from "express";
import bcrypt from "bcrypt"
import admin from "../models/owner.js"
const OwnerRouter = express.Router();

OwnerRouter.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const exist = admin.findOne({ email })
    if (exist) {
        res.status(400).json({ msg: "User Already Exist....in data base" })
    } else {
        try {
            const hash = await bcrypt.hash(password, 5);

            // Create a new user with the hashed password
            const new_user = new admin({ name: name, email: email, password: hash });
            await new_user.save();
            res.status(200).json({ msg: "Admin Added", Admin: new_user })
        } catch (error) {
            res.status(500).json({ msg: "Admin not added", error: error.message });
        }
    }

});


OwnerRouter.post("/login", async (req,res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await admin.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "Admin not found" });
        }
        // Comparing the password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
       
        res.status(200).json({
            msg: "Login successful",
            
            admin: {
                Id: user._id,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Login failed", error: error.message });
    }
});

export default OwnerRouter;