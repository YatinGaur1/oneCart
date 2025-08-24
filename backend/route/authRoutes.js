import express from "express"
import { logIn, logOut, Register } from "../controller/authController.js"
const authRoutes=express.Router()

authRoutes.post("/register",Register)
authRoutes.post("/login",logIn)
authRoutes.post("/logout",logOut)

export default authRoutes