const Contact = require("../models/contactModel")

const createContactInstance = (contactObj) => new Contact(contactObj).save()

module.exports = {
    createContactInstance
}