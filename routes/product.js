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
<<<<<<< HEAD
router.route("/cart/:id").get(getOneProduct);
=======
router.route("/cart/product/:id").get(getOneProduct);
>>>>>>> 8e06f3ed7ed10b539308ad50b51938417f35a463

router.route("/admin/product/newProduct").post(isAuthenticatedUser, newProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authoriseRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authoriseRoles("admin"), deleteProduct);

module.exports = router;
