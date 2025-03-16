import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/database.js";
import blogRouter from "./routes/BlogRoutes.js"

dotenv.config();
connectDb();
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use("/api/v1", blogRouter)

app.listen(PORT, () => {
  console.log("Server listening at port 5000");
});
