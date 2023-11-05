const express = require("express");
const router = express.Router();
const { RenderMedicines } = require("../Controller/TemplateController");
router.route("/").get(RenderMedicines);
module.exports = router;
