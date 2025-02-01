import { Router } from "express";
import { signUp } from "../controllers/user.controller";
import { signUpRequestValidator } from "../utils/validators";

const router = Router();

router.post("/sign-up", signUpRequestValidator, signUp);

export default router;
