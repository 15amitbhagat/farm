const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const cookieParser=require('cookie-parser');


//database information
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//database connection
db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected");
    }
});

app.use(express.urlencoded({ extended: false })); //to sent any HTML form

const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));


app.use(express.json());

app.use(cookieParser()); //initializing the cookies
app.set('view engine', 'ejs');


//define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.listen(3000, () => {
    console.log('server started');
});