const express = require('express');
const router = express.Router();

const formController = require('../controllers/form_controller');

router
    .route('/contact')
    .post(formController.contactForm);

module.exports = router;