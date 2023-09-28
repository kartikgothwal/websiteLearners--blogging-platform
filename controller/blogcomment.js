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
