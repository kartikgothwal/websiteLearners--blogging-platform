const express = require("express");
const router = express.Router();
const AuthController = require("../controller/auth");

router
  .post("/user/register", AuthController.register)
  .post("/user/login", AuthController.login);

exports.router = router;
