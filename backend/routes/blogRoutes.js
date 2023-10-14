const express = require("express");
const { createBlogController, getAllBlogByIdController, getAllBlogPost, getBlogByIdController } = require("../controller/blogController");
const { verifyAuthToken } = require("../common/helper");
const {blog} = require("../validation/validation")
const validationRequest = require("../validation");

const router = express.Router();

router.post("/createBlog", validationRequest(blog.createBlog),verifyAuthToken, createBlogController);

router.get("/getAllBlogsById",verifyAuthToken, getAllBlogByIdController)

router.get("/getAllBlogPost",getAllBlogPost)

router.get("/getBlogById/:id",getBlogByIdController)

module.exports = router;
