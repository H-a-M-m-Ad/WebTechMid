const mongoose = require("mongoose");
const MedicineModel = new mongoose.Schema(
  {
    Name: {
      type: String,
      trim: true,
      required: [true, "please enter medicine name"]
    },
    Category: {
      type: String,
      trim: true,
      required: [true, "please enter medicine Category"]
    },
    Barcode: {
      type: String,
      trim: true,
      required: [true, "please enter medicine Barcode"]
    },
    GenericName: {
      type: String,
      trim: true,
      required: [true, "please enter medicine GenericName"]
    },
    Manufacturer: {
      type: String,
      trim: true,
      required: [true, "please enter medicine GenericName"]
    },
    CatId: {
      type: Number,
      required: [true, "please enter medicine CatId"]
    },
    Stock: {
      type: Number,
      required: [true, "please enter medicine Stock"]
    },

    Price: {
      type: Number,
      required: [true, "please enter medicine Price"]
    },
    RowId: {
      type: Number,
      required: [true, "please enter medicine name"]
    }
  },
  {
    autoIndex: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);
module.exports = mongoose.model("MedicineModel", MedicineModel);
