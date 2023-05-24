const Product = require("../models/productModel");
const dotenv = require("dotenv");
const connectDB = require("../config/db");

const products = require("../data/product");
const { connect } = require("mongoose");

dotenv.config();

connectDB();

const seedProduct = async () => {
  try {
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProduct();
