import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import { booleanValues, errorMessages } from "../utils/constants";

export const createNewBook = async (req: Request, res: Response) => {
  const imgFiles = req.files as Express.Multer.File[];
  const newBookBody = req.body;

  try {
    const uploadImagPromises = imgFiles.map(async (imgFile) => {
      const base64 = Buffer.from(imgFile.buffer).toString("base64");
      const dataUri = `data:${imgFile.mimetype};base64,${base64}`;
      const uploadRes = await cloudinary.uploader.upload(dataUri);
      return uploadRes.secure_url;
    });

    const imgUrls = await Promise.all(uploadImagPromises);
  } catch (error) {
    console.log("CREATE BOOK", error);
    return res.status(500).json({
      success: booleanValues.falseValue,
      message: errorMessages.bookNotCreated,
    });
  }
};
