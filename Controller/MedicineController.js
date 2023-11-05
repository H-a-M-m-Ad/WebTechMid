const Trackerror = require("../Middleware/TrackError");
const MedicineModel = require("../Models/MedicineModel");
const HandlerCallBack = require("../Utils/HandlerCallBack");
const Features = require("../Utils/Features");
exports.GetMedicines = Trackerror(async (req, res, next) => {
  const resultPerPage = Number(req.query.limit);
  const ValuetobesearchedString = [
    "Category",
    "Barcode",
    "Name",
    "GenericName"
  ];
  console.log(req.query.search);
  const data = await MedicineModel.find({
    $or: [
      { Category: { $regex: req.query.search || "", $options: "i" } }, // Case-insensitive search
      { Barcode: { $regex: req.query.search || "", $options: "i" } },
      { Name: { $regex: req.query.search || "", $options: "i" } },
      { GenericName: { $regex: req.query.search || "", $options: "i" } }
    ]
  });
  const TotalCount = await MedicineModel.countDocuments({
    $or: [
      { Category: { $regex: req.query.search || "", $options: "i" } }, // Case-insensitive search
      { Barcode: { $regex: req.query.search || "", $options: "i" } },
      { Name: { $regex: req.query.search || "", $options: "i" } },
      { GenericName: { $regex: req.query.search || "", $options: "i" } }
    ]
  });
  // res.render("index", { medicines: data });
  // res.render("index");
  //   const dataCount = await MedicineModel.countDocuments();
  //   const Feature = new Features(
  //     MedicineModel.find(),
  //     ValuetobesearchedString,
  //     ValuetobesearchedString,
  //     null
  //   )
  //     .searching()
  //     .filter();

  //   let data = await Feature.query;
  //   let filtereddataCount = data.length;
  //   Feature.pagination(Number(req.query.limit));
  //   data = await Feature.query;

  res.status(200).json({
    success: true,
    TotalCount,
    data
  });
});
