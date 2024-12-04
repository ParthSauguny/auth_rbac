const mongo = require('mongoose');
const {model , Schema} = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    owner:{
        type: mongo.Schema.Types.ObjectId,
        ref: 'UserSchema',
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
})


const Book = model("Book" , bookSchema);
module.exports = Book;