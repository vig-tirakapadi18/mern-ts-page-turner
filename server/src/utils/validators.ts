import { body, check } from "express-validator";

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

export const bookRequestValidator = [
  body("name").notEmpty().withMessage("Name is required!"),
  body("author").notEmpty().withMessage("Author is required!"),
  body("publicationYear")
    .notEmpty()
    .isNumeric()
    .withMessage("Publication year is required & must be a number!"),
  body("genres").isArray().withMessage("At least one genre is required!"),
  body("pages").isNumeric().withMessage("Pages must be a number!"),
  body("isbn").isISBN().withMessage("Please enter a valid ISBN!"),
  body("price")
    .isNumeric()
    .notEmpty()
    .withMessage("Price is required & must be a number!"),
  body("starRating").isNumeric().withMessage("Star rating is required!"),
];
