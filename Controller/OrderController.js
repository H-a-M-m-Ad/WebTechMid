const Trackerror = require("../Middleware/TrackError");
const OrderModel = require("../Models/OrderModel");
const MedicineModel = require("../Models/MedicineModel");
const HandlerCallBack = require("../Utils/HandlerCallBack");
const Features = require("../Utils/Features");
exports.CreateOrder = Trackerror(async (req, res, next) => {
  const { Orders } = req.body;
  const Order=JSON.parse(Orders)
  console.log(JSON.parse(Orders));
  let StockUpdate;
  let filter;
  //   Orders.map(async (Order) => {
  await OrderModel.create({
    RowId: Order.RowId,
    qty: Order.qty
  });
  Stock = await MedicineModel.findOne({
    RowId: Order.RowId
  }).select("Stock");
  Stock = {
    Stock: Stock.Stock - Order.qty
  };
  filter = { RowId: Order.RowId };
  await MedicineModel.findOneAndUpdate(filter, Stock);
  //   });
  // await MedicineModel.findByIdAndUpdate({
  //     RowId,

  // })

  res.status(200).json({
    success: true,
    message: "Successfully created order"
  });
});
