const mongoose = require("mongoose");

const {Schema} = mongoose

const commentSchema = new Schema({
    comment: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId },
    blogId: {type:mongoose.Schema.Types.ObjectId} 
},{timestamps:true})

const commentModel = mongoose.model("Comment",commentSchema)

module.exports = commentModel