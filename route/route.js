

const express = require("express")
const { Get, Create, Read, Upadate, Delete, CreateGet, createContact } = require("../Config/User")
const { Login, SignUp } = require("../Config/Auth")

const route = express.Router()

route.get("/get", Get )
route.post("/create", Create )
route.get("/read/:id", Read )
route.put("/update/:id", Upadate )
route.delete("/delete/:id", Delete )

route.get("/contact" , CreateGet)
route.post("/createContact" ,createContact)

route.post("/login", Login)
route.post("/signUp", SignUp)

module.exports=route