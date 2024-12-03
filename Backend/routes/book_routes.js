const express = require('express');
const BOOK = require('../models/book');

const router = express.Router();

router.route("/add-book").post(async(req , res) => {
    const {title , author , address} = req.body;

    try {
        await BOOK.create({
            title,
            author,
            address
        });
        return res.status(200).json({message: "added successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "can't add abhi. try later"});
    }
});

router.get("/api/get-books" , async(req , res) => {

})