const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const {
  createProfile,
  getAllProfiles,
  getMyProfile,
  getOneProfile,
  deleteProfile,
} = require("../controllers/profiles");
const upload = require("../utils/multer");


router.get("/my_profile", isAuth(), getMyProfile);
router.put("/", upload("profile").single("fileName"), isAuth(), createProfile);
router.get("/", getAllProfiles);
router.get("/:id", getOneProfile);
router.delete("/:id", isAuth(), deleteProfile);

module.exports = router;
