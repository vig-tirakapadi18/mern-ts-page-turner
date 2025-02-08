import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../models/user.model";
import {
  booleanValues,
  errorMessages,
  statusCodes,
  successMessages,
} from "../utils/constants";
import { createJwtToken } from "../utils/createJwtToken";

export const signIn = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(statusCodes.code400).json({
        success: booleanValues.falseValue,
        message: errorMessages.invalidCredentials,
      });
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user?.password);

    if (!isValidPassword) {
      res.status(statusCodes.code400).json({
        success: booleanValues.falseValue,
        message: errorMessages.invalidCredentials,
      });
      return;
    }

    const token = createJwtToken({ id: user._id, email: user.email });

    res.cookie("pageTurner", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(statusCodes.code200).json({
      success: booleanValues.trueValue,
      message: successMessages.userLoggedIn,
      user: {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error: unknown) {
    console.error("SIGN IN", error);
    res.status(statusCodes.code500).json({
      success: booleanValues.falseValue,
      message: errorMessages.internalServerError,
    });
  }
};

export const signOut = (req: Request, res: Response) => {
  res.cookie("pageTurner", "", { expires: new Date(0) }).json({
    success: booleanValues.trueValue,
    message: successMessages.userLoggedOut,
  });
};

export const getValidUser = (req: Request, res: Response) => {
  res
    .status(statusCodes.code200)
    .json({ success: booleanValues.trueValue, userId: req.userId });
};
