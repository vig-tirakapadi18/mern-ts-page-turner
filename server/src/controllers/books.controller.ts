import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import {
  booleanValues,
  errorMessages,
  statusCodes,
  successMessages,
} from "../utils/constants";
import { IBook } from "../types";
import Book from "../models/book.model";

export const createNewBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  const imgFiles = req.files as Express.Multer.File[];
  const newBookBody: IBook = req.body;

  try {
    const uploadImagPromises = imgFiles.map(async (imgFile) => {
      const base64 = Buffer.from(imgFile.buffer).toString("base64");
      const dataUri = `data:${imgFile.mimetype};base64,${base64}`;
      const uploadRes = await cloudinary.uploader.upload(dataUri);
      return uploadRes.secure_url;
    });

    const imgUrls = await Promise.all(uploadImagPromises);
    newBookBody.imgUrls = imgUrls;
    newBookBody.lastUpdated = new Date();
    newBookBody.userId = req.userId as string;

    const newBook = new Book(newBookBody);
    await newBook.save();

    res.status(statusCodes.code201).json({
      success: booleanValues.trueValue,
      book: newBook,
      message: successMessages.bookCreated,
    });
  } catch (error) {
    console.log("CREATE BOOK", error);
    res.status(500).json({
      success: booleanValues.falseValue,
      message: errorMessages.bookNotCreated,
    });
  }
};
