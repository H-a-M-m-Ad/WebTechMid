const mongoose = require("mongoose");
const OrderModel = new mongoose.Schema(
  {
    RowId: {
      type: Number,
      required: [true, "please enter order RowId"]
    },

    qty: {
      type: Number,
      required: [true, "please enter order qty"]
    }
  },
  {
    autoIndex: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);
module.exports = mongoose.model("OrderModel", OrderModel);
