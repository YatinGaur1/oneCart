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
      return res.status(201).json(user)
    } catch (error) {
        console.log("Registration Error")
        return res.status(500).json({message:  `registration error is ${error}`})
    }

}


export const logIn=async(req,res,)=>{
try {
    let {email,password}=req.body;
    const user=await User.findOne({email})
    if(!user)
    {
        return res.status(404).json({message:"User not found"})
    }
    
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
      return res.status(404).json({message:"password not correct"})
    }
    const token=await genToken(user._id)
    res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*24*60*60*1000

        })
      return res.status(200).json(user)
} catch (error) {
    return res.status(500).json({message: `login error ${error}`})
}
}

export const logOut=async(req,res)=>{
    try {
        res.clearCookie("token")
        res.status(200).json({message:"Logout Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"logout error"})
    }
}

