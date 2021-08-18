const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        genre: { type: String, required: true },
        author: { type: String, required: true },
        country: { trype: String, require: true },
        img: { type: string }
    },
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;