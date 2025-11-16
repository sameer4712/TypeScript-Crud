import express from "express";
import mongoose from "mongoose";
import router from "./src/Router/UserRoutes.ts";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb", {
      dbName: "testdb",
    });
    console.log(" MongoDB connected successfully");
  } catch (err) {
    console.error(" MongoDB connection failed:", err);
  }
};
connectDB();

app.use(express.json());
app.use("/", router);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
