import { model, Schema } from "mongoose";

export interface IUser {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
