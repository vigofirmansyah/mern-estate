import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();
const connect = process.env.MONGO;
mongoose
  .connect(connect)
  .then((err) => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log("service is running on port 3000");
});

app.use("/api/user", userRouter);
