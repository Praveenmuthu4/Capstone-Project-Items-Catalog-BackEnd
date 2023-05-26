const express = require("express");
const server = express();
const dotenv = require("dotenv");
const app = require("./app");
require("./config/db");

dotenv.config({ path: "backend/.env" });

server.use("/", app);

app.listen(process.env.PORT, () => {
  console.log(
    `Server Started at Port:${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
