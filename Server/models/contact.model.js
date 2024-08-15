import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    contact: { type: String, require: true },
    country: { type: String, require: true },
    streetAddress: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    postalCode: { type: String },
    website: { type: String },
    about: { type: String, require: true },

})


const ContactModel = mongoose.model("contact", contactSchema)

export default ContactModel;