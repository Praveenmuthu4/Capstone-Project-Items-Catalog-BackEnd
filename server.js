const express = require("express");
const server = express();
const dotenv = require("dotenv");
const app = require("./app");
const cloudinary = require("cloudinary");

require("./config/db");

dotenv.config({ path: "backend/.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

server.use("/", app);

app.listen(process.env.PORT, () => {
  console.log(
    `Server Started at Port:${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
