const express = require("express");
const router = express.Router();
const { GetMedicines } = require("../Controller/MedicineController");
router.route("/GetMedicine").get(GetMedicines);
module.exports = router;
