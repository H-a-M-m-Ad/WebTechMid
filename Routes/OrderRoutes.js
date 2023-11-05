const express = require("express");
const router = express.Router();
const { CreateOrder } = require("../Controller/OrderController");
router.route("/CreateOrder").post(CreateOrder);
module.exports = router;
