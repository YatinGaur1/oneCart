import User from "../model/userModel.js"

export const getCurrentUser=async(req,res)=>{
    try {
        const userid=req.userId
        const user=await User.findById(userid).select("-password")
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        return res.status(201).json(user)
    } catch (error) {
        console.log("error in getcurrent user")
        return res.status(500).json({message:`error in getcurrentuser ${error}`})
    }
}