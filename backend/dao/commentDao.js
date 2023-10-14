const Comment = require("../models/commentModel")

const addCommentInstance = (commentObj) => new Comment(commentObj).save()

module.exports = {
    addCommentInstance
}