const Product = require("../models/productModel");

const ErrorHandler = require("../utils/errorHandler");

const APIFeatures = require("../utils/apiFeatures");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.newProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

exports.getProduct = async (req, res, next) => {
  const resPerPage = 4;
  const productsCount = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter();

  const products = await apiFeatures.query;

  res.status(200).json({
    success: true,
    productsCount,
    products,
  });
};

exports.getOneProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found"), 404);
  }

  res.status(200).json({
    success: true,
    product,
  });
});

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndDelete(req.params.id, {
    delete: true,
  });

  res.status(200).json({
    success: true,
    message: "Product is deleted",
  });
});
