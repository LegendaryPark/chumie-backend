import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import WordPairRouter from "./api/wordPair/WordPairRouter";
import AuthRouter from "./api/auth/AuthRouter";
import ProgressRouter from "./api/progress/ProgressRouter";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/wordpair", WordPairRouter);
app.use("/auth", AuthRouter);
app.use("/progress", ProgressRouter);

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

export default app;
