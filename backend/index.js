require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")

const cors = require("cors")


const URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3002

const userRouter = require("./routes/user")
const dashboardRouter = require("./routes/dashboard")
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({ origin: [process.env.FRONTEND_URL1, process.env.FRONTEND_URL1], credentials: true }));


app.use("/",userRouter )
app.use("/",dashboardRouter )


app.listen(PORT, ()=>{
    console.log("app started",PORT)
    mongoose.connect(URL)
    console.log("DB connected")
})