import express from "express";
import ContactModel from "../models/contact.model.js";

const ContactRouter = express.Router();


ContactRouter.post("/post", async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        contact,
        country,
        streetAddress,
        city,
        state,
        postalCode,
        website,
        about,
    } = req.body;

    try {
        const added_data = new ContactModel({
            firstName,
            lastName,
            email,
            contact,
            country,
            streetAddress,
            city,
            state,
            postalCode,
            website,
            about,
        })
        await added_data.save();

        res.status(200).json({ msg: "Form data added success", data: added_data })
    } catch (error) {
        res.status(401).json({ msg: "Error in adding form data in data base", error: error.message })
    }

})

ContactRouter.get("/get", async (req, res) => {
    try {
        const form_data = await ContactModel.find();
        res.status(200).json({ msg: "Data is here...", data: form_data })
    } catch (error) {
        res.status(400).json({ msg: "Error in getting forms data form data base", error: error.message })
    }
})


ContactRouter.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await ContactModel.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ msg: "No contact found with this ID" });
        }

        res.status(200).json({ msg: "Contact deleted successfully", data: deletedContact });
    } catch (error) {
        res.status(500).json({ msg: "Error in deleting contact", error: error.message });
    }
});


export default ContactRouter;