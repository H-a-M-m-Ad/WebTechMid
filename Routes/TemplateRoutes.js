const express = require("express");
const router = express.Router();
const {
  RenderMedicines,
  RenderMedicinesBySearch
} = require("../Controller/TemplateController");
router.route("/").get(RenderMedicines);
router.route("/RenderMedicinesBySearch").post(RenderMedicinesBySearch);
module.exports = router;
