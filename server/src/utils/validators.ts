import { check } from "express-validator";

export const signUpRequestValidator = [
  check("firstName", "First name is required").isString().notEmpty(),
  check("lastName", "Last name is required").isString().notEmpty(),
  check("email", "Please enter a valid email address").isEmail(),
  check("password", "Password must be at least 8 characters long").isLength({
    min: 8,
  }),
];

export const signInRequestValidator = [
  check("email", "Email is required").isEmail(),
  check("password", "Password is required & must be 8 or more characters")
    .notEmpty()
    .isLength({ min: 8 }),
];
