const express = require("express");
const router = express.Router();
const BlogController = require("../controller/blog");

router
  .get("/myblogs", BlogController.getMyBlogs)
  .post("/createblog", BlogController.createBlog)
  .patch("/editblog/:blogId", BlogController.editBlog)
  .get("/allblogs", BlogController.getAllBlogs)
  .delete("/delete/:blogId", BlogController.deleteBlog);

exports.router = router;
