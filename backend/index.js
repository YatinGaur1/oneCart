import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import authRoutes from "./route/authRoutes.js"
import cors from 'cors'
import userRoutes from "./route/userRoutes.js"
dotenv.config()
let port=process.env.PORT||6000

let app=express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
     credentials:true,
}))

app.use("/api/auth",authRoutes)

app.use("/api/user",userRoutes)

app.listen(port,()=>{
    console.log("Hello from server",port);
    connectDB();
})