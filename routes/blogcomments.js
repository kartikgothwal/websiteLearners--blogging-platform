const express = require("express");
const router = express.Router();
const BlogController = require("../controller/blog");
router.post("/addcomments/:blogId", BlogController.addComments);
exports.router = router;
