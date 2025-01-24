const express = require("express");
const isAdmin = require("../middlewares/isAdmin");
const isAuth = require("../middlewares/isAuth");
const {
  getAllUsers,
  deleteUsers,
  getOneUsers,
  deleteAppointmentByAdmin,
  deletePostByAdmin
} = require("../controllers/admin");
const router = express.Router();

router.get("/", isAuth(), isAdmin, getAllUsers);
router.delete("/:id", isAuth(), isAdmin, deleteUsers);
router.delete("/app/:id", isAuth(), isAdmin, deleteAppointmentByAdmin);
router.delete("/post/:id", isAuth(), isAdmin, deletePostByAdmin);
router.get("/:id", isAuth(), isAdmin, getOneUsers);

module.exports = router;
