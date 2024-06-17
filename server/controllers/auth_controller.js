const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user_model');
const ContactModel = require('../models/contact_model');


const home = async (req, res) => {
    try {
        res.send('Hello from controllers!!!');
    }
    catch (err) {
        console.log(err);
        res
            .status(400)
            .send('Page Not Found!');
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password, isAdmin } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send("User already exists!");
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        let userCreated = new User({
            username,
            email,
            password: hash,
            isAdmin
        });

        await userCreated.save();

        //JSON WEB TOKEN
        const token = jwt.sign({ email: userCreated.email }, process.env.SECRET, { expiresIn: '5d' });

        res
            .status(201)
            .json({ "MSG": "Registration Successful!", "token": token });
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Register: Internal server error!");
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userFound = await User.findOne({ email });

        if (!userFound) {
            return res.status(400).send("User doesn't exists!");
        }

        const confirmIdentity = await bcrypt.compare(password, userFound.password);

        if (confirmIdentity) {
            // Token Generation
            const token = jwt.sign({ email: email }, process.env.SECRET, { expiresIn: '5d' })
            return res.status(200).json({ "token": token, "MSG": "Logged In Successfully!" });
        }
        else {
            return res.status(400).send("Credentials do not match!");
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send(`Login: Internal Server Error`);
    }

}


module.exports = { home, register, login };