const express = require("express");
const { addCommentController } = require("../controller/commentController");
const { verifyAuthToken } = require("../common/helper");
const {comment} = require("../validation/validation")
const validationRequest = require("../validation");

const router = express.Router();

router.post("/addComment",validationRequest(comment.addComment),verifyAuthToken, addCommentController);

module.exports = router;
