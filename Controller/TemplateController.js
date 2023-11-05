const Trackerror = require("../Middleware/TrackError");
const HandlerCallBack = require("../Utils/HandlerCallBack");
const Features = require("../Utils/Features");
const api = require("../axiosInstance/api");
exports.RenderMedicines = Trackerror(async (req, res, next) => {
  console.log("dasd");
  const data = await api.get("/api/GetMedicine");
  console.log(data.data, "dasd");
  res.render("index", { medicines: data.data.data });
});
