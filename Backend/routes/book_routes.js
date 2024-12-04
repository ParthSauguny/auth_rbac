const express = require('express');
const BOOK = require('../models/book');
const {checkRole , authenticateUser} = require('../middlewares/auth');
const { ObjectId } = require('mongoose').Types;

const router = express.Router();

router.post("/add-book" , authenticateUser , checkRole(['admin']) , async(req , res) => {
    console.log(req.cookies);
    const {title , author , address} = req.body;
    const owner = req.user._id;
    console.log(title , author , address , owner);

    try {
        await BOOK.create({
            title,
            owner: owner,
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
    console.log("entered");
    try {
        console.log("try catch");
        const books = await BOOK.find();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "try later"});
    }
});


router.delete("/delete-book/:book_id", authenticateUser, checkRole(['moderator']), async (req, res) => {
    const { book_id } = req.params;  // Correctly accessing book_id from req.params
    try {
        // Convert the book_id to an ObjectId
        const bookObjectId = new ObjectId(book_id);
        
        console.log("Deleting book with ID:", bookObjectId);

        // Use await to ensure the operation completes before sending the response
        const deletedBook = await BOOK.findByIdAndDelete(bookObjectId);

        // Check if the book was found and deleted
        if (!deletedBook) {
            return res.status(404).json({ error: "Book not found" });
        }

        return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Couldn't delete. Try again later" });
    }
});


module.exports = router;