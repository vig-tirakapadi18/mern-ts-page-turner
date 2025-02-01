import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { connectToDB } from "./src/db/connectToDB";

// Routes
import userRoutes from "./src/routes/user.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome!" });
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}!`);
  connectToDB();
});
