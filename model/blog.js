const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  comments: [
    {
      username: { type: String, required: true },
      useremail: { type: String, required: true },
      text: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const BlogModel = new model("blog", BlogSchema);
exports.BlogModel = BlogModel;
