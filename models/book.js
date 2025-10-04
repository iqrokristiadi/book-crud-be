import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  genre: String,
  released: Date,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
});

export const Book = mongoose.model.Book || mongoose.model("Book", bookSchema);
