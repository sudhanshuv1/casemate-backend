const express = require("express");
const router = express.Router();
const {
  getAllAppointmentOfOneLawyer,
  getAllAppointment,
  createAppointment,
  getOneAppointment,
  deleteAppointment,
  confirmAppointment,
} = require("../controllers/appointments");
const isAuth = require("../middlewares/isAuth");

router.get("/:id", isAuth(), getAllAppointmentOfOneLawyer);
router.post("/:avocatID", isAuth(), createAppointment);
router.get("/", isAuth(), getAllAppointment);
router.get("/:id", isAuth(), getOneAppointment);
router.delete("/:id", isAuth(), deleteAppointment);
router.put("/:id", confirmAppointment);

module.exports = router;
