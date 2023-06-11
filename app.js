const express = require("express");
const products = require("./routes/product");
const user = require("./routes/user");
const order = require("./routes/order");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(cors());

app.use("/api", products);
app.use("/api", user);
app.use("/api", order);

app.use(errorMiddleware);

module.exports = app;
