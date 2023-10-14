const mongoose = require('mongoose')

const {Schema} = mongoose

const contactSchema = new Schema({
    name:{type:String, required:true},
    phone:{type:Number, required:true},
    email:{type:String, required:true},
    message:{type:String,required:true,}
},{timestamps:true})

const contactModel = mongoose.model("Contact",contactSchema)

module.exports = contactModel