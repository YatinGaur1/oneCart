import express from "express"
import { login, Register } from "../controller/authController.js"
const authRoutes=express.Router()

authRoutes.post("/register",Register)
authRoutes.post("/login",login)

export default authRoutes