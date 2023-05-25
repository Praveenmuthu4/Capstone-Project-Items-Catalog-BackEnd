const express = require("express");
const { isAuthenticatedUser, authoriseRoles } = require("../middlewares/auth");
const {
  newOrder,
  getSingleOrder,
  myOrder,
  allOrders,
  updateOrder,
  deleteOrder,
  createProductReview,
  getProductReview,
  deleteProductReview,
} = require("../controllers/orderController");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrder);
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authoriseRoles("admin"), allOrders);
router
  .route("/admin/orders/:id")
  .put(isAuthenticatedUser, authoriseRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authoriseRoles("admin"), deleteOrder);

router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(isAuthenticatedUser, getProductReview);
router.route("/reviews").delete(isAuthenticatedUser, deleteProductReview);

module.exports = router;
