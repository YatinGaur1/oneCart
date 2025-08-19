import mongoose from "mongoose";
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connect db")
        console.log(process.env.MONGODB_URL)
    } catch (error) {
        console.log("error in connect DB");
        console.log(error);
        
    }
}
export default connectDB