import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDB } from "./src/db/connectToDB";

// Routes
import authRoutes from "./src/routes/auth.route";
import userRoutes from "./src/routes/user.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}!`);
  connectToDB();
});
