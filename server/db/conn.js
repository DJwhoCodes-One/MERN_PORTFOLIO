const mongoose = require('mongoose');

const URL = process.env.DB;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("DB Connected Successfully!");
    }
    catch (err) {
        console.log(err);
        process.exit(0);
    }
}

module.exports = connectDB;