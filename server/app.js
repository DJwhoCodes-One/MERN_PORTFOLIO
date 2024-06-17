require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/conn');
const cookieParser = require('cookie-parser');
const authRouter = require('./router/auth_route');
const formRouter = require('./router/form_route');

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/form', formRouter);

const port = process.env.PORT;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is listening at port: ${port}`);
        })
    })