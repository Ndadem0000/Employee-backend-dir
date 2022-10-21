const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    images: {
      type: String,
    },

    name: {
      type: String,
      required: true,
    },

    info: {
      type: String,
      required: true,
    },

    office: {
      type: Number,
      required: true,
    },

    mobile: {
      type: Number,
      required: true,
    },

    sms: {
      type: Number,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
