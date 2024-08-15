import bcrypt from "bcrypt"
import owner from "../models/owner.js"

const AdminLogin = async (req, res) => {
    const {email,password} = req.body;
    try {
         // Find the user by email
         const user = await owner.findOne({ email: email });
         if (!user) {
             return res.status(400).json({ msg: "User not found" });
         }
         // Comparing the password
         const match = await bcrypt.compare(password, user.password);
         if (!match) {
             return res.status(400).json({ msg: "Invalid credentials" });
         }
         res.status(200).json({msg:"login success",admin:user})
    } catch (error) {
        res.status(401).json({msg:"Login failed",error:error.message})
    }
}

export default AdminLogin;