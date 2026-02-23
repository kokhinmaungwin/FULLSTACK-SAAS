require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());
app.use("/uploads", express.static("../uploads"));

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(process.env.PORT, ()=>{
  console.log("Server running...");
});
