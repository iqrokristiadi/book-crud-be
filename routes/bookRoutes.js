import express from "express";
import { Book } from "../models/book.js";

const router = express.Router();

// GET ALL BOOKS
router.get("/", async (req, res) => {
  try {
    const result = await Book.find().populate("author");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE BOOKS
router.post("/", async (req, res) => {
  const book = req.body;
  try {
    const result = await Book.create(book);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE BOOKS
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const updated = req.body;
  try {
    const result = await Book.findByIdAndUpdate(id, updated, {
      new: true,
    });
    res.send({
      success: true,
      message: "Book is Updated",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Failed to Update Book",
      data: result,
    });
  }
});

// GET BOOKS BY AUTHOR
router.get("/author/:id", async (req, res) => {
  try {
    const result = await Book.find({ author: req.params.id }).populate(
      "author"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE BOOK
router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
      message: "Book is Deleted",
      data: null,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Failed to Delete Book",
      data: null,
    });
  }
});

export default router;
