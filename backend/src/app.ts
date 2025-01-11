import express from "express";
import {config} from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
config()
const app = express();
import cors from "cors"

//middlewares
// cors for interconnection between servers
// credentials true for passing cookies
app.use(cors({
  origin: [
    "https://conversify-omega.vercel.app",
    "https://conversify-anj27rdse-musthafa-vs-projects.vercel.app"
  ],
  credentials: true
})) //Replace with your frontend URL or localhost:5173
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use("/api/v1",appRouter)

//remove it in production
app.use(morgan("dev"))

export default app;
