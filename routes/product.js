const express = require("express");
const {
  getProduct,
  newProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuthenticatedUser, authoriseRoles } = require("../middlewares/auth");

const router = express.Router();

router.route("/product").get(getProduct);
router.route("/product/:id").get(getOneProduct);

router
  .route("/admin/product/newProduct")
  .post(isAuthenticatedUser, authoriseRoles("admin"), newProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authoriseRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authoriseRoles("admin"), deleteProduct);

module.exports = router;
