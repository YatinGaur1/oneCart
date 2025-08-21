import User from "../model/userModel.js";
import validator from "validator"
import bcrypt from "bcryptjs"
import genToken from "../config/token.js";

export const Register=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const existUser= await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User already Exist"})
        }
        if(!(validator.isEmail(email))){
            return res.status(400).json({message:"Enter Valid Credentials"})
        }
        if(password.lenth<8){
            return res.status(400).json({message:"Enter password at least 8 character"})
        }

        let hashedPassword= await bcrypt.hash(password,10)//for secure the password  
        
        const user=await User.create({name,email,password:hashedPassword});

        let token=await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*24*60*60*1000

        })
    } catch (error) {
        
    }

}