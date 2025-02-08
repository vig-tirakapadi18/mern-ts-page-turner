import { Router } from "express";
import { createNewBook } from "../controllers/books.controller";
import { upload } from "../db/multer";
import { verifyToken } from "../middlewares/auth.middleware";
import { bookRequestValidator } from "../utils/validators";

const router = Router();

router.post(
  "/create-book",
  verifyToken,
  bookRequestValidator,
  upload.array("img", 3),
  createNewBook
);

export default router;
