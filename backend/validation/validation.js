const Joi = require('joi')

const auth = {
    registerUser:Joi.object({
        fullName: Joi.string().trim().required().min(3),
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(3).required()
    }),
    loginUser:Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(3).required()
    })
}

const blog = {
    createBlog: Joi.object({
        title: Joi.string().trim().required().min(3),
        blog: Joi.string().trim().required()
    }),
}

const comment = {
    addComment: Joi.object({
        comment: Joi.string().trim().required(),
        blogId: Joi.string().trim().required()
    })
}

const contact = {
    name: Joi.string().trim().min(3).required(),
    phone: Joi.number().max(10).required(),
    email: Joi.string().trim().email().required(),
    message: Joi.string().trim().required()
}

module.exports = {
    auth,
    blog,
    comment,
    contact
}

