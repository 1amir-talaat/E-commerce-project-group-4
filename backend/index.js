import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connection } from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(6000, () => console.log("Server running at port 5000"));
