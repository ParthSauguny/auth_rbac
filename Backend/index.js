const express = require('express');
const mongo = require('mongoose');
const user_route = require('./routes/user_routes');
const book_route = require('./routes/book_routes');
const cookieparser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 5000
const db_url = process.env.DB_url

mongo.connect(db_url)
.then(() => console.log("connected to database"))
.catch(error=>console.log(error));

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Frontend's domain
    methods: ['GET', 'POST' , 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended: true}));
app.use("/user" , user_route);
app.use("/book" , book_route);

app.get('/' , (req , res) => {
    res.send("hello");
})

app.listen(PORT , () => console.log("started at" , PORT));