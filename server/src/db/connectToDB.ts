import mongoose from "mongoose";

const MONGO_CONN_STR = process.env.MONGO_CONN_STR;

export const connectToDB = () => {
  return mongoose
    .connect(MONGO_CONN_STR as string)
    .then(() => console.log("Connection established with MongoDB!"))
    .catch((error) => console.log("MongoDB Error", error));
};
