const express = require("express");
const ordersController = require("../controllers/ordersController");
const router = express.Router();

router.get("/", ordersController.getAllOrders);
router.get("/:userId", ordersController.getOrdersById);
router.get("/status/:statusId", ordersController.getOrdersByStatus);
router.get("/shipping/:shippingId", ordersController.getOrdersByShipping);

module.exports = router;
