import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDB } from "./src/db/connectToDB";
import { connectToCloudinary } from "./src/db/cloudinary";

// Routes
import authRoutes from "./src/routes/auth.route";
import userRoutes from "./src/routes/user.route";
import bookRoutes from "./src/routes/books.route";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}!`);
  connectToDB();
  connectToCloudinary();
});
