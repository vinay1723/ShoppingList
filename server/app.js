import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductListRouter from "./routes/ProdListRouter.js";
import ListRouter from "./routes/ListRouter.js";
import userRouter from "./routes/userRouter.js";
import morgan from "morgan";
import globalErrorHandler from "./controllers/errorController.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("database connected successfully");
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(morgan("dev"));

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/products", ProductListRouter);
app.use("/api/v1/listproducts", ListRouter);
app.use("/api/v1/users", userRouter);

app.use(globalErrorHandler.errorHandler);

app.listen(3000, () => {
  console.log("server started listing on port 3000");
});

export default app;
