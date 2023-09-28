const express = require("express");
const router = express.Router();
const BlogCommentsController = require("../controller/blogcomment");
router
  .post("/addcomment/:blogId", BlogCommentsController.addComments)
  .patch("/editcomment/:blogId/:commentId", BlogCommentsController.editComment)
  .delete(
    "/deletecomment/:blogId/:commentId",
    BlogCommentsController.deleteComment
  );
exports.router = router;
