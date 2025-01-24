const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  clientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  lawyerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  subject: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  phone : {
    type: String,
    required : true,
  },
  isDone : {
    type: Boolean,
    default: false,
  }
});

module.exports = Appointment = mongoose.model("appointment", appointmentSchema);
