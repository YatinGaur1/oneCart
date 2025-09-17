import React, { useContext } from 'react'
import{useNavigate} from "react-router-dom"
import logo from "../assets/logo.png"
import { axiosInstance } from '../utils/axios'
import { AdminDataContext } from '../context/AdminContext'
function Nav() {
    let navigate=useNavigate()
    let {getAdmin}=useContext(AdminDataContext)
    const logOut=async()=>{
        try {
            let result =await axiosInstance.post("/auth/logout")
            getAdmin()
            navigate('/login')
        } catch (error) {
            console.log("admin internal error".error)
            
        }
    }
  return (
    <div className='w-[100vw] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0  flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'>
        <div className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer' onClick={()=>navigate('/')}>
         <img src={logo} alt="" className='w-[40px]'/>
         <h1 className='text-[25px] text-black font-serif'>OneCart</h1>
        </div>
        <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white' onClick={logOut}>LogOut</button>
    </div>
  )
}

export default Nav