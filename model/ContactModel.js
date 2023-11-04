const mongoose = require("mongoose")


const ContactSChema = new mongoose.Schema({
    name:String,
    msg:String,
    email:String,
    phone:String,
    address:String
})

const Contact = mongoose.model("contact", ContactSChema)

module.exports= Contact