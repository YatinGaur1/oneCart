import Logo from "../assets/logo.png"
import google from "../assets/google.svg"
import {useNavigate} from "react-router-dom"
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import {  useContext, useState } from "react";
import { authDataContext } from "../context/AuthContext.jsx";
import axios from "axios"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase.js";

export const RegistrationPage=()=>{
  let [show,setShow]=useState(false)
  let[name,setName]=useState("")
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  let {serverUrl}=useContext(authDataContext)
  let navigate = useNavigate()

  const handleSignUpSubmit=async(e)=>{
    e.preventDefault() // page stop browser default behaviour mean stop reload page on event
try {
  const result=await axios.post(serverUrl+'/api/auth/Register',{name,email,password},{withCredentials:true})
  console.log(result.data)
} catch (error) {
  console.log(error.response.data)
}
  }

  const googleSignUp=async()=>{
    try {
      const res=await signInWithPopup(auth,provider)
      let user=res.user
      let name=user.displayName
      let email=user.email
     const result=await axios.post(serverUrl+'/api/auth/googleRegister',{name,email},{withCredentials:true})
     console.log(result.data)

    } catch (error) {
      console.log(error.response.data)
    }
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">

      <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[7px] " >
        <img className="w-[60px] cursor-pointer"src={Logo} alt="NoImage"onClick={()=>navigate("/")}/>
        <h1 className="text-[22px] font-bold cursor-pointer " onClick={()=>navigate("/")}>OneCart</h1>
      </div>

      <div className=" w-[100%] h-[100px] flex items-center flex-col justify-center gap-[9px]">
        <span className="text-[25px] font-semibold">Registration</span>
        <span className="text-[16px]">Welcome to OneCart , Place your order.</span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025]  border-[0.25px]  border-[#96969635]  backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center ">

        <form action="" onSubmit={handleSignUpSubmit} className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]">

              <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer"onClick={googleSignUp}>
                <img src={google} alt="" className="w-[20px]"/>Registration with Google
              </div>

              <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
                <div className="w-[40%] h-[1px] bg-[#96969635]"></div>OR<div className="w-[40%] h-[1px] bg-[#96969635]"></div>
              </div>

              <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
                <input type="text" placeholder="UserName" onChange={(e)=>{setName(e.target.value)}} value={name}
                required className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold" />

                  <input type="email" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}} value={email} 
                  required className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"/>

                    <input type={show?'text':'password'} placeholder="Password" 
                    onChange={(e)=>{setPassword(e.target.value)}} value={password}
                    required className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"/>

                   {!show? <IoEyeOutline className=" w-[20px] h-[20px] cursor-pointer absolute right-[5%]" onClick={()=>setShow(prev => !prev)} />:<IoEyeOff className=" w-[20px] h-[20px] cursor-pointer absolute right-[5%]" onClick={()=>setShow(prev => !prev)}/>}

                    <button className="w-[100%] h-[50px]  bg-[#1a879dae] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold
                     cursor-pointer">Create Account</button>

                     <p className="flex gap-[7px]">you have already Account?<span className="text-[#78e0f5ae] text-[17px] font-semibold cursor-pointer" onClick={()=>navigate('/login')}>Login</span>
                     </p>
              </div>
        </form>

      </div>
      
    </div>
  )
}