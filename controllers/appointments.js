const Appointment = require("../models/appointments");

const createAppointment = async (req, res) => {
  try {
    const existAppointment = await Appointment.findOne({
      clientID: req.user._id
    });
    if (existAppointment)
      return res
        .status(400)
        .send({
          msg: "Appointment already made",
        });
    const newAppointment = new Appointment({
      ...req.body,
      clientID: req.user._id,
      lawyerID: req.params.avocatID,
      phone: req.user.phone
    });
    await newAppointment.save();
    res.send({ msg: "Appointment made successfully", newAppointment });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const getOneAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const appointment = await Appointment.findOne({ _id: id })
      .populate("clientID", "-password")
      .populate("lawyerID", "-password");
    if (!appointment) return res.status(400).send({ msg: "No appointments found" });
    res.send(appointment);
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const getAllAppointment = async (req, res) => {
  const role = req.user.role;
  try {
    if (role == "lawyer") {
      const appointments = await Appointment.find({
        lawyerID: req.user._id,
      }).populate("clientID", "-password");
      if (!appointments)
        return res.status(400).send({ msg: "No appointments found" });
      return res.send(appointments);
    }
    if (role == "client") {
      const appointments = await Appointment.find({
        clientID: req.user._id,
      }).populate("lawyerID", "-password");
      if (!appointments)
        return res.status(400).send({ msg: "No appointments found" });
      return res.send(appointments);
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const getAllAppointmentOfOneLawyer = async (req, res) => {
  const id = req.params.id;
  const day = req.query.day;
  try {
    const appointments = await Appointment.find({ lawyerID: id, day: {$regex : day} });
    if (!appointments)
      return res.status(404).send({ msg: "No appointments found" });
    res.send(appointments);
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const deleteAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedAppointment = await Appointment.deleteOne({ _id: id });
    if (deletedAppointment.deletedCount) {
      return res.send({ msg: "appointment deleted successfully" });
    } else {
      return res.status(400).send({ msg: "Appointment already deleted" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const confirmAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    await Appointment.updateOne({ _id: id },{isDone : true});
    res.send({ msg: "Appointment confirmed successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

module.exports = {
  getAllAppointmentOfOneLawyer,
  getAllAppointment,
  createAppointment,
  getOneAppointment,
  deleteAppointment,
  confirmAppointment,
};
