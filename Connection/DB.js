const mongoose = require("mongoose")




 const ConnectDB = async() =>{
    try {
        const res = await mongoose.connect(process.env.MONGOURL)
    console.log("Connection")
    } catch (error) {
        console.log( error,"error")
    }
}

module.exports = ConnectDB ;