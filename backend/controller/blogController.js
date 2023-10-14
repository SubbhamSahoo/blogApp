const { createBlogInstance, getBlogInsatnce, getAllBlogsInstance } = require("../dao/blogDao")
const mongoose = require('mongoose')

const createBlogController = async (req,res) => {
    try {
        req.body.userId = req.user._id
        const blogPost = await createBlogInstance(req.body)
        if(blogPost){
            res.status(201).json({message:"Blog posted successfully",blogPost})
        }else{
            res.status(400).json({message:"Unable to create blogpost.Please contact admin"})
        }
    } catch (error) {
        console.log(error)
    }
}

const getAllBlogByIdController = async (req,res) => {
    try {
        const blogs = await getBlogInsatnce([
        {
            $match:{userId:req.user._id}
        },
        {
            $lookup:{
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as:"user"
            },
        },
        {$unwind:{path:"$user",preserveNullAndEmptyArrays:true}},
      
    ])
        if(blogs.length){
            res.status(200).json({message:"blogs fetched successfully",blogs})
        }else{
            res.status(200).json({message:"No blogs found",blogs})
        }
    } catch (error) {
        console.log(error)
    }
}

const getAllBlogPost = async (req,res) => {
    try {
        const blogs = await getBlogInsatnce([
            {
                $lookup:{
                    from:"users",
                    localField:"userId",
                    foreignField:"_id",
                    as:"user"
                },
            },
            {$unwind:{path:"$user",preserveNullAndEmptyArrays:true}},
        ])
        if(blogs.length){
            res.status(200).json({message:"blogs fetched successfully",blogs})
        }else{
            res.status(200).json({message:"No blogs found",blogs})
        }
    } catch (error) {
        console.log(error)
    }
}

const getBlogByIdController = async (req,res) => {
    try {
        const blogId = req.params.id
        console.log(blogId)
        const blogs = await getBlogInsatnce([
            {
                $match:{_id:new mongoose.Types.ObjectId(blogId)}
            },
            {
                $lookup:{
                    from:"comments",
                    localField:"_id",
                    foreignField:"blogId",
                    as:"comments"
                }
            },
            {
                $unwind:{path:"$comments",preserveNullAndEmptyArrays:true}
            },
            {
                $lookup:{
                    from:"users",
                    localField:"comments.userId",
                    foreignField:"_id",
                    as:"users"
                }
            },
            {
                $unwind:{path:"$users",preserveNullAndEmptyArrays:true}
            },
            {
                $group:{
                    _id:"$_id",
                    blog:{$first:"$$ROOT"},
                    commentedUser:{
                        $push:{
                            comment:"$comments.comment",
                            userId:"$comments.userId",
                            fullName:"$users.fullName"
                        }
                    }
                }
            },
            {
            "$project":{
                "_id":1,
                "blog":1,
                "commentedUser":{
                    $cond:{
                        if:{ $eq:["$commentedUser.comment",null] },
                        then:[],
                        else:"$commentedUser"
                    }
                },
                
            }
        },
        ])
        res.status(200).json(blogs)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createBlogController,
    getAllBlogByIdController,
    getAllBlogPost,
    getBlogByIdController
}