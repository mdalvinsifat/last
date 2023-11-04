const mongoose = require("mongoose");



const AuthSchema = new mongoose.Schema({

    email:{
        type:String 
    },
    password:{
        type:String
    }

})

const Auth =  mongoose.model("auth",AuthSchema )

module.exports = Auth