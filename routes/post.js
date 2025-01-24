const express = require("express");
const { createPost,getPost,deletePost,editPost } = require("../controllers/post");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();

router.put("/:id",isAuth(),editPost)
router.delete("/:id",isAuth(),deletePost)
router.post("/",isAuth(),createPost)
router.get("/:id",isAuth(),getPost)

module.exports = router;