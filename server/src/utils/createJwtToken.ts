import jwt from "jsonwebtoken";

export const createJwtToken = (payload: { [key: string]: string }) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
};
