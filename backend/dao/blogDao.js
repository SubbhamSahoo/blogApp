const Blog = require("../models/blogModel");

const createBlogInstance = (blogObj) => new Blog(blogObj).save()

const getBlogInsatnce = (userId=[],proj={}) => Blog.aggregate(userId)

const getAllBlogsInstance = () => Blog.find()

module.exports = {
    createBlogInstance,
    getBlogInsatnce,
    getAllBlogsInstance
}