const express = require("express");
const { registerUserController, loginUserController } = require("../controller/authController");
const { auth } = require("../validation/validation")
const validate = require("express-joi-validator");
const validationRequest = require("../validation");

const router = express.Router();

router.post("/registerUser", validationRequest(auth.registerUser), registerUserController);

router.post("/login",validationRequest(auth.loginUser),loginUserController)


module.exports = router;
