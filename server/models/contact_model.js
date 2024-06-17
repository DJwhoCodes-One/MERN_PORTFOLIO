const mongoose = require('mongoose');

const contactFormSchema = mongoose.Schema({
    username: String,
    email: String,
    description: String
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema);

module.exports = ContactForm;