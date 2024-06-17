const ContactModel = require('../models/contact_model');


const contactForm = async (req, res) => {
    try {
        const { username, email, description } = req.body;

        const userContactForm = new ContactModel({
            username,
            email,
            description
        });
        await userContactForm.save();

        return res.status(201).send("Message sent successfully");
    }
    catch (err) {
        res.status(500).send(`ContactForm: Internal Server Error`);
    }
}

module.exports = { contactForm }