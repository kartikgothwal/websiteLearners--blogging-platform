const model = require("../model/blog");
const BlogModel = model.BlogModel;
const user = require("../model/user");
const UserModel = user.UserModel;
exports.getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await BlogModel.find();
    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const fetchUser = await UserModel.findOne({ email: req.body.decode });
    req.body.authorId = fetchUser._id;
    const blog = await new BlogModel(req.body);
    blog
      .save()
      .then((data) => {
        res.status(200).json({ message: "Blog has been created", data });
      })
      .catch((error) => {
          res.status(400).json({ message: error.message });
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.editBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const fetchBlog = await BlogModel.findById(blogId).populate("authorId");
    if (!fetchBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (fetchBlog.authorId.email != req.body.decode) {
      return res.status(400).json({
        message:
          "Unauthorised access, this post is created by other user, you can't edit it ",
      });
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(fetchBlog._id, {
      title: req.body.title,
      content: req.body.content,
    });

    res.status(200).json({ message: "Blog has been updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getMyBlogs = async (req, res) => {
  try {
    const AllfetchedBlog = await BlogModel.find().populate("authorId");
    let userBlogs = AllfetchedBlog.filter((items) => {
      return items.authorId.email == req.body.decode;
    });
    if (!userBlogs.length) {
     return res.status(200).json({
        message:
          "No blogs found, If you have not posted then, Please post a blog",
      });
    }
    userBlogs = userBlogs.map((blog) => {
      const { authorId, ...blogWithoutAuthorId } = blog.toObject();
      return blogWithoutAuthorId;
    });
    res.status(200).json(userBlogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const fetchBlog = await BlogModel.findById(blogId).populate("authorId");
    if (!fetchBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (fetchBlog.authorId.email !== req.body.decode) {
      return res.status(400).json({
        message:
          "Unauthorised access, this post is created by another user, you can't delete it",
      });
    }
    const deletedBlog = await BlogModel.findByIdAndDelete(fetchBlog._id);
    res.status(200).json({ message: "Blog has been deleted", deletedBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
