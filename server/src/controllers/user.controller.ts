import { Request, Response } from "express";
import User from "../models/user";
import { booleanValues, errorMessages, statusCodes } from "../utils/constants";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { createJwtToken } from "../utils/createJwtToken";

export const signUp = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res
      .status(statusCodes.code400)
      .json({ success: booleanValues.falseValue, errors: errors.array() });
    return;
  }

  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      res.status(statusCodes.code400).json({
        success: booleanValues.falseValue,
        message: errorMessages.userAlreadyExists,
      });

      return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();

    if (!user) {
      res.status(statusCodes.code500).json({
        success: booleanValues.falseValue,
        message: errorMessages.internalServerError,
      });

      return;
    }

    const token = createJwtToken({ id: user._id, email: user.email });

    res
      .cookie("pageTurner", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 100 * 60 * 60 * 24,
      })
      .sendStatus(statusCodes.code201);
  } catch (error: unknown) {
    console.error("SIGN UP", error);
    res.status(statusCodes.code500).json({
      success: booleanValues.falseValue,
      message: errorMessages.internalServerError,
    });
  }
};
