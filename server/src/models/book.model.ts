import { model, Schema } from "mongoose";
import { IBook } from "../types";

const bookSchema = new Schema<IBook>(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    author: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    genres: { type: [String], required: true },
    description: { type: String },
    pages: { type: Number, required: true },
    isbn: { type: String, unique: true },
    price: { type: Number, required: true },
    starRating: { type: Number, required: true, min: 1, max: 5 },
    imgUrls: { type: [String] },
    lastUpdated: { type: Date, default: new Date() },
  },
  { timestamps: true }
);

const Book = model<IBook>("Book", bookSchema);

export default Book;
