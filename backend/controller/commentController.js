const { addCommentInstance } = require("../dao/commentDao")

const addCommentController = async (req,res) => {
    try {
        req.body.userId = req.user._id
        const comment = await addCommentInstance(req.body)
        if(comment){
            res.status(201).json({message:"commented on blog successfully",comment})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addCommentController
}