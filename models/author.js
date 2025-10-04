import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  name: { type: String, required: true },
  bio: String,
  birthDate: Date,
});

export const Author =
  mongoose.model.Author || mongoose.model("Author", authorSchema);
