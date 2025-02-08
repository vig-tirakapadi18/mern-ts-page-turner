import { Router } from "express";
import { createNewBook } from "../controllers/books.controller";
import { upload } from "../db/multer";

const router = Router();

router.post("/create-book", upload.array("img", 3), createNewBook);

export default router;
