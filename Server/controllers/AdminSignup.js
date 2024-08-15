import bcrypt from "bcrypt"
import owner from "../models/owner.js"

const AdminLogin = async (req, res) => {
    const { name, email, password } = req.body;
    // const existUser = await owner.findOne({ email: email });
    // Checking for user if user already exist...
    // if (existUser) {
    //     res.status(400).json({ msg: "User Already Exist....in data base" })
    // } else {
    try {
        // Hash the password
        const hash = await bcrypt.hash(password, 5);
        // Create a new user with the hashed password
        const new_user = new owner({ name: name, email: email, password: hash });
        // Saving the user to the database...
        await new_user.save();
        res.status(200).json({ msg: "New user added", new_user: req.body });
    } catch (error) {
        res.status(500).json({ msg: "Failed to add new user", error: error.message });
    }
    // }
}

export default AdminLogin;