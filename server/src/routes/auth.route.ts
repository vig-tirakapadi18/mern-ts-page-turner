import { Router } from "express";
import { getValidUser, signIn } from "../controllers/auth.controller";
import { signInRequestValidator } from "../utils/validators";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.post("/sign-in", signInRequestValidator, signIn);

router.get("/validate-token", verifyToken, getValidUser)

export default router;
