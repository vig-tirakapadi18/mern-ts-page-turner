import { model, Schema } from "mongoose";

export interface IBook {
  _id: string;
  userId: string;
  name: string;
  author: string;
  publicationYear: number;
  genres: string[];
  description: string;
  pages: number;
  isbn: string;
  price: number;
  starRating: number;
  imgUrls: string[];
  lastUpdated: Date;
}

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
    starRating: { type: Number },
    imgUrls: { type: [String] },
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Book = model<IBook>("Book", bookSchema);

export default Book;
