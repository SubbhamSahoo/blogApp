const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require("../config/config")
const { getUserInstance } = require('../dao/userDao')

const generateHashPassword = (password) => bcrypt.hash(password,Number(10))

const compareHashPassword = (password, comparePassword) => bcrypt.compare(password,comparePassword)

const authToken = async (_id) => {
    return jwt.sign({_id},SECRET_KEY,{expiresIn:"1d"})
}

const verifyAuthToken = async(req,res,next) => {
    try {
        if(req.headers.authorization){
            const token = req.headers.authorization;
            const verifyToken = await jwt.verify(token,SECRET_KEY)
            req.user = await getUserInstance({_id:verifyToken._id});
            next()
        }else{
            res.status(401).json({message:"Unauthorized"})
        }
    } catch (error) {
        res.status(401).json({message:"Unauthorized"})
    }
}

module.exports = {
    generateHashPassword,
    compareHashPassword,
    authToken,
    verifyAuthToken
}