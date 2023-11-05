const express = require("express");
const router = express.Router();
const {
  RenderMedicines,
  RenderMedicinesBySearch,
  RenderOrders
} = require("../Controller/TemplateController");
router.route("/").get(RenderMedicines);
router.route("/RenderOrders").get(RenderMedicines);
router.route("/RenderMedicinesBySearch").post(RenderMedicinesBySearch);
router.route("/RenderOrders").post(RenderOrders);
module.exports = router;
