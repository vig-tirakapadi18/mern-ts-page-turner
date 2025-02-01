import { check } from "express-validator";

export const signUpRequestValidator = [
  check("firstName", "First name is required").isString().notEmpty(),
  check("lastName", "Last name is required").isString().notEmpty(),
  check("email", "Please enter a valid email address").isEmail(),
  check("password", "Password must be at least 8 characters long").isLength({
    min: 8,
  }),
];
