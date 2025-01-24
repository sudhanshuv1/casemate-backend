const express = require("express");
const router = express.Router();
const { updateUser, deleteUser, getUser } = require("../controllers/users");
const isAuth = require("../middlewares/isAuth");

router.put("/", isAuth(), updateUser);
router.get("/", isAuth(), getUser);
router.delete("/", isAuth(), deleteUser);

module.exports = router;
