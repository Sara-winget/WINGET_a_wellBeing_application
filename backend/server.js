// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./db.js";
// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON bodies

db()
// Basic Route
app.get("/", (req, res) => {
  res.send("API is running...");
});


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})