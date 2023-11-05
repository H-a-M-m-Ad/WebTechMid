const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const BodyParser = require("body-parser");
const ApplyMiddleware = require("./MiddleWare/ErrorCallBackReturn");
const MedicineRoutes = require("./Routes/MedicineRoutes");
const TemplateRoutes = require("./Routes/TemplateRoutes");
const OrderRoutes = require("./Routes/OrderRoutes");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/Secrets.env" });
}
app.use(express.json());
app.use(cookieParser());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "vash");
app.use("/api", MedicineRoutes);
app.use("/api", OrderRoutes);
app.use("/", TemplateRoutes);
app.use(ApplyMiddleware);
module.exports = app;
