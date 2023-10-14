const {createContactInstance} = require("../dao/contactDao")

const contactUsController = async (req,res) => {
    try {
        const contactData = await createContactInstance(req.body)
        res.status(200).json({message:"Your message has been recorded. Will contact you soon"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {contactUsController}