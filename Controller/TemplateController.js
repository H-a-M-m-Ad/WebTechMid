const Trackerror = require("../Middleware/TrackError");
const HandlerCallBack = require("../Utils/HandlerCallBack");
const Features = require("../Utils/Features");
const api = require("../axiosInstance/api");
exports.RenderMedicines = Trackerror(async (req, res, next) => {
  const data = await api.get("/api/GetMedicine");
  res.render("index", { medicines: data.data.data });
});
exports.RenderMedicinesBySearch = Trackerror(async (req, res, next) => {
  console.log(req.body);
  const data = await api.get(`/api/GetMedicine?search=${req.body.search}`);
  res.render("Medicine", { medicines: data.data.data });
});
