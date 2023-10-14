const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title:{
      type:String,
      required:true
    },
    blog: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
