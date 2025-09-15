
import jwt from "jsonwebtoken"

const isAuth=async(req,res,next)=>{
    try {
        const {token} =req.cookies
     
        if(!token){
            return res.status(404).json({message:"user  doesn not have token "})
        }

        const verifyToken=jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(404).json({message:"user doesn't have valid token"})
        }

        req.userId=verifyToken.userId
        next()
    } catch (error) {
        console.log("verifytoken error")
        return res.status(500).json({message:`verifytoken ${error}`})
    }
}
export default isAuth