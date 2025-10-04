import express from "express";
import { Author } from "../models/author.js";

const router = express.Router();

// GET ALL AUTHORS
router.get("/", async (req, res) => {
  try {
    const result = await Author.find();
    res.json(result);
  } catch (error) {
    res.json(500).json({ error: error.message });
  }
});

// CREATE AUTHOR
router.post("/", async (req, res) => {
  const author = req.body;
  try {
    const result = await Author.create(author);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE AUTHOR
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const updated = req.body;
  try {
    const result = await Author.findByIdAndUpdate(id, updated, {
      new: true,
    });
    res.send({
      success: true,
      message: "Author Update Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Failed to Update Author",
      data: result,
    });
  }
});

// DELETE AUTHOR
router.delete("/:id", async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
      message: "Author is Deleted",
      data: null,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: true,
      message: "Author is Deleted",
      data: null,
    });
  }
});

export default router;
