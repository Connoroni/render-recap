import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});

app.get("/", (req, res) => {
  res.json(`hello`);
});
