require("dotenv").config();
const model = require("../model/user");
const UserModel = model.UserModel;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const privateKey = process.env.PRIVATE_KEY;

exports.register = async (req, res) => {
  const user = await new UserModel(req.body);
  const token = jwt.sign(req.body.email, privateKey, { algorithm: "RS256" });
  // Generate a salt
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  user.token = token;
  user.password = hash;
  user
    .save()
    .then((data) => {
      res
        .status(200)
        .json({ message: "Account has been created", token: data.token });
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
};

exports.login = async (req, res) => {
  if (!req.body.password || !req.body.email) {
    return res.status(400).json({ message: "Enter email and passwords" });
  }
  try {
    const doc = await UserModel.findOne({ email: req.body.email });
    if (!doc) {
      return res
        .status(400)
        .json({ message: "Invaild email, Enter the correct email" });
    }

    const isAuth = bcrypt.compareSync(req.body.password, doc.password);

    if (!isAuth) {
      return res
        .status(400)
        .json({ message: "Invaild password, Enter the correct password" });
    }
    const token = jwt.sign(req.body.email, privateKey, {
      algorithm: "RS256",
    });
    doc.token = token;
    await doc
      .save()
      .then((data) => {
        res.status(200).json({
          message: `Welcome back ${doc.fullname}. You are logged in`,
          token: data.token,
        });
      })
      .catch((error) => {
        res.status(400).json(error.message);
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Something went wrong" });
  }
};
