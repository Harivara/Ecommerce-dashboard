import express from  'express'
import mongoose from 'mongoose'
import authRoute from './routes/authroute.js'
import cors from 'cors'
import orderRoute from './routes/orderroute.js'
import dotenv from 'dotenv'
import feedbackRoute from './routes/feebbackroute.js'


const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(`mongodb+srv://hari:harivara@cluster0.9ji0v.mongodb.net/dashboard`)
        console.log(`Connected to mongoDb `)
    }
    catch(error)
    {
        console.log(`Error in mongoDB ${error}` );

    }
}
connectDB();

app.use("/user",authRoute)
app.use("/order",orderRoute)
app.use("/feedback",feedbackRoute)

app.get("/",(req,res)=>{
res.send("<h1>hello</h1>")
})

app.listen(8080,()=>{
    console.log("server running ")
})
