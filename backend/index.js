import express from "express";
import routes from "./routes.js";
import cors from "cors";
import dotenv from "dotenv";
// TODO: complete me (loading the necessary packages)

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// TODO: complete me (CORS)
app.use(cors({
    origin: FRONTEND_URL
}));




app.use(express.json());
app.use('', routes);

export default app;