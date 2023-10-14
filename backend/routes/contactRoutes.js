const express = require('express')
const { contactUsController } = require('../controller/contactController')
const {contact} = require("../validation/validation")
const validationRequest = require("../validation");

const router = express.Router()

router.post("/contact", validationRequest(contact) ,contactUsController)

module.exports = router