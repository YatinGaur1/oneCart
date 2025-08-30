import express from "express"
import { googleLogin, googleRegister, logIn, logOut, Register } from "../controller/authController.js"
const authRoutes=express.Router()

authRoutes.post("/register",Register)
authRoutes.post("/login",logIn)
authRoutes.post("/logout",logOut)
authRoutes.post("/googleRegister",googleRegister)
authRoutes.post("/googleLogin",googleLogin)

export default authRoutes