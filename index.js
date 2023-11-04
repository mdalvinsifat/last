const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const ConnectDB = require("./Connection/DB")
const route  = require("./route/route")


const app= express()

app.use(express.json())

app.use(cors())


dotenv.config()

app.get("/", (req, res) => {
    res.json("Hello");
})

app.use("/api/v1", route)
ConnectDB()
const port = process.env.PORT
app.listen(port, () => console.log(`http://localhost:${port}`))



