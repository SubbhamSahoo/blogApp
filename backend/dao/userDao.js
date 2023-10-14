const User = require("../models/userModel")

const createUserInstance = (userObj) => new User(userObj).save()

const getUserInstance = (userObj,proj={}) => User.findOne(userObj,proj)

module.exports = {
    createUserInstance,
    getUserInstance
}