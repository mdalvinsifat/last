const Contact = require("../model/ContactModel")
const User = require("../model/model")


const Get = async(req, res) =>{
    try {

        const product = await User.find()
        res.status(200).send({
            success:true,
            message:"User Get successfully",
            product
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:"user not create"
        })
    }
}



const Create = async(req, res) =>{
    try {
        const product = await User.create(req.body)
        res.status(200).send({
            success:true,
            message:"User Get successfully",
            product
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:"user not create"
        })
    }
}



const Read = async(req, res) =>{
    try {
        const id = req.params.id
        const product = await User.findById(id)
        res.status(200).send({
            success:true,
            message:"User Get successfully",
            product
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:"user not create"
        })
    }
}




const Upadate = async(req, res) =>{
    try {
        const id = req.params.id
        const body = req.body
        const product = await User.findByIdAndUpdate(id,body ,{new:true})
        res.status(200).send({
            success:true,
            message:"User Get successfully",
            product
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:"user not create"
        })
    }
}


const Delete = async(req, res) =>{
    try {
        const id = req.params.id 
        const product = await User.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"User Get successfully",
            product
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:"user not create"
        })
    }
}






const CreateGet = async(req, res) =>{
    try {

        const product = await Contact.find()
        res.status(200).send({
            success:true,
            message:"User Get successfully",
            product
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:"user not create"
        })
    }
}



const createContact = async(req, res) =>{
    try {
        const product = await Contact.create(req.body)
        res.status(200).send({
            success:true,
            message:"User Get successfully",
            product
        })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:"user not create"
        })
    }
}




module.exports  = {Get , Read , Create, Upadate , Delete , CreateGet , createContact }




