import jwt from "jsonwebtoken"
 const genToken=async(userId)=>{
try {
    let token=  await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})
    return token
} catch (error) {
    console.log("Token Error",error)
}
}


export const genToken1=async(email)=>{
try {
    let token= await jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"7d"})
    console.log(token)
    return token
} catch (error) {
    console.log("Token1 Error",error)
}
}
//if we used to async/await it does not give proper token in string formate it give promise
export default genToken