import jwt from "jsonwebtoken"

const adminAuth=async(req,res,next)=>{

    try {
        let {token}=req.cookies
        console.log(req.cookies)
        if(!token){
            return res.status(400).json({message:"admin token not found"})
        }

        let verifyToken= jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken)
        {
            return res.status(404).json({message:"admintoken is not valid"})
        }
        req.adminEmail=process.env.ADMIN_EMAIL
        next()
    } catch (error) {
        console.log("admintoken server error")
        return res.status(500).json({message:`admintoken erro ${error}`})
    }
}

export default adminAuth;