import { useState } from "react";
import Logo from "../assets/logo.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { axiosInstance } from "../utils/axios";
import {useNavigate} from "react-router-dom"

 const LoginPage = () => {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate() 

  const handleAdminLogin=async(e)=>{
    e.preventDefault()
    console.log("adminlogin")
    try {
      const result=await axiosInstance.post('/auth/adminLogin',{email,password})
      console.log(result.data)
      console.log("completed")
      navigate('/')
    } catch (error) {
      console.log("error in server",error)
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[7px] ">
        <img
          className="w-[60px] cursor-pointer"
          src={Logo}
          alt="NoImage"
          onClick={() => navigate("/")}
        />
        <h1 className="text-[22px] font-bold cursor-pointer ">OneCart</h1>
      </div>

      <div className=" w-[100%] h-[100px] flex items-center flex-col justify-center gap-[9px]">
        <span className="text-[25px] font-semibold">Login</span>
        <span className="text-[16px]">
          Welcome to OneCart ,Apply to Admin Login.
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[400px] bg-[#00000025]  border-[0.25px]  border-[#96969635]  backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center ">
        <form
          action=""
          onSubmit={handleAdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />

            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />

            {!show ? (
              <IoEyeOutline
                className=" w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[44.5%]"
                onClick={() => setShow((prev) => !prev)}
              />
            ) : (
              <IoEyeOff
                className=" w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[44.5%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}

            <button
              className="w-[100%] h-[50px]  bg-[#1a879dae] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold
                     cursor-pointer hover:bg-[#094450ae]"
            >
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage