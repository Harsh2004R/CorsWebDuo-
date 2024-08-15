import mongoose from "mongoose";

const ownerSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
})


const OwnerModel = mongoose.model("Admin", ownerSchema)

export default OwnerModel;