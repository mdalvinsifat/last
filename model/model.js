const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    name:String,
    title:String,
    detelis1:String,
    detelis:String,
    img:String
})

const User = mongoose.model("schema", ProductSchema)

module.exports= User