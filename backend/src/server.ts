import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import "dotenv/config";

import foodRouter from "./routes/foodRoute";
console.log(process.env.MONGO_URI);
const app = express();

const port: number = 3000;

connectDB();
app.use(cors());
app.use(express.json());

// api routes
app.use("/v1/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Node.js + Express!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
