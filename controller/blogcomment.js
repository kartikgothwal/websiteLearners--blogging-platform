const model = require("../model/blog");
const BlogModel = model.BlogModel;
const user = require("../model/user");
const UserModel = user.UserModel;

exports.addComments = async (req, res) => {
  try {
    const { blogId } = req.params;
    const fetchBlog = await BlogModel.findById(blogId);
    if (!fetchBlog._id) {
      return res.status(404).json({ message: "blog not found" });
    }
    const userData = await UserModel.findOne({ email: req.body.decode });
    fetchBlog.comments.push({
      username: userData.fullname,
      useremail: userData.email,
      text: req.body.text,
    });
    fetchBlog
      .save()
      .then((response) => {
        res.status(201).json({ message: "Comment has been added", response });
      })
      .catch((err) => {
        res.status(400).json({ message: "Something went wrong", err });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.editComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.params;
    const fetchBlog = await BlogModel.findById(blogId);
    if (!fetchBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    const comments = fetchBlog.comments;
    if (!comments.length) {
      return res.status(404).json({ message: "No comments exits" });
    }
    const TargetCommentIndex = comments.findIndex((item) => {
      return item._id == commentId;
    });
    if (TargetCommentIndex === -1) {
      return res.status(404).json({ message: "comment not found" });
    }
    if (comments[TargetCommentIndex].useremail !== req.body.decode) {
      return res
        .status(404)
        .json({ message: "You can't edit someone else's comment" });
    }
    fetchBlog.comments[TargetCommentIndex].text = req.body.text;
    const updatedBlog = await fetchBlog.save();

    res.status(200).json({
      message: "Comment has been updated",
      updatedComment: updatedBlog.comments[TargetCommentIndex],
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.params;
    const fetchBlog = await BlogModel.findById(blogId);
    if (!fetchBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    const comments = fetchBlog.comments;
    if (!comments.length) {
      return res.status(404).json({ message: "No comments exits" });
    }
    const TargetCommentIndex = comments.findIndex((item) => {
      return item._id == commentId;
    });
    if (TargetCommentIndex === -1) {
      return res.status(404).json({ message: "comment not found" });
    }
    if (comments[TargetCommentIndex].useremail !== req.body.decode) {
      return res
        .status(404)
        .json({ message: "You can't delete someone else's comment" });
    }
    fetchBlog.comments.splice(TargetCommentIndex, 1);
    const updatedBlog = await fetchBlog.save();
    res.status(200).json({
      message: "Comment has been deleted",
      updatedBlog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
