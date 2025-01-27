import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome!" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}!`);
});
