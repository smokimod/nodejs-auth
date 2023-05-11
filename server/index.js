require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://sagees:3dpiCH45lDnFPHpo@nodejs-auth.dhi7z67.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sagees:3dpiCH45lDnFPHpo@nodejs-auth.dhi7z67.mongodb.net/?retryWrites=true&w=majority",
      {}
    );
    app.listen(PORT, () => {
      console.log("server work");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
