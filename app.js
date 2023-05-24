const express = require("express");
const products = require("./routes/product");
const user = require("./routes/user");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api", products);
app.use("/api", user);

app.use(errorMiddleware);

module.exports = app;
