const {model , Schema} = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserSchema'
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