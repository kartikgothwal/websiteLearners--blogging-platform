const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          value
        );
      },
      message:
        "Requires at least one uppercase letter (A-Z) \n Requires at least one lowercase letter (a-z) \n Requires at least one digit (0-9) \n Requires at least one special character \n minimum length of 8 characters.",
    },
  },
  token: {
    type: String,
  },
});
const UserModel = new model("user", userSchema);
exports.UserModel = UserModel;
