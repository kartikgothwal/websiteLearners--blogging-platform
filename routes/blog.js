const express = require("express");
const router = express.Router();
const BlogController = require("../controller/blog");

router
  .get("/myblogs", BlogController.getMyBlogs)
  .get("/allblogs", BlogController.getAllBlogs)
  .post("/createblog", BlogController.createBlog)
  .patch("/editblog/:blogId", BlogController.editBlog)
  .delete("/deleteblog/:blogId", BlogController.deleteBlog);

exports.router = router;
