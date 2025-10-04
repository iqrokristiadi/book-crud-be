import express from "express";
import dotenv from "dotenv";
import connectToDB from "./database/db.js";
import authorRoutes from "./routes/authorRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
dotenv.config();

const app = express();
const port = process.env.port;

app.use(express.json());
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

connectToDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port}`);
});
