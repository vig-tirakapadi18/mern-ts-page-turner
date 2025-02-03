import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { booleanValues, errorMessages, statusCodes } from "../utils/constants";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.pageTurner;

  if (!token) {
    res.status(statusCodes.code401).json({
      success: booleanValues.falseValue,
      message: errorMessages.unauthorized,
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    console.log(decoded);
    req.userId = (decoded as JwtPayload).id;
    next();
  } catch (error) {
    console.error("VALIDATE TOKEN", error);
    res.status(statusCodes.code401).json({
      success: booleanValues.falseValue,
      message: errorMessages.unauthorized,
    });
  }
};
