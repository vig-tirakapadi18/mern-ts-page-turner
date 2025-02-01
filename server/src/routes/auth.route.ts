import { Router } from "express";
import { signIn } from "../controllers/auth.controller";
import { signInRequestValidator } from "../utils/validators";

const router = Router();

router.post("/sign-in", signInRequestValidator, signIn);

export default router;
