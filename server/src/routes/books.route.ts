import { Router } from "express";
import { createNewBook, getAllBooks, getBookById } from "../controllers/books.controller";
import { upload } from "../db/multer";
import { verifyToken } from "../middlewares/auth.middleware";
import { bookRequestValidator } from "../utils/validators";

const router = Router();

router.post(
  "/create-book",
  verifyToken,
  bookRequestValidator,
  upload.array("imgFiles", 3),
  createNewBook
);

router.get("/", verifyToken, getAllBooks);

router.get("/:bookId", verifyToken, getBookById)

export default router;
