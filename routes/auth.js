const express = require("express");
const router = express.Router();
const AuthController = require("../controller/auth");

router
  .post("/users/register", AuthController.register)
  .post("/users/login", AuthController.login);

exports.router = router;
