import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoSearchCircleOutline } from "react-icons/io5";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { userDataContext } from '../context/UserContext';
import {useNavigate} from 'react-router-dom'
import { axiosInstance } from '../utils/axios';
function Navbar() {
  const{userData,getCurrentUser}=useContext(userDataContext)
  const[showSearch,setShowSearch]=useState(false)
  const[showProfile,setShowProfile]=useState(false)
  let navigate=useNavigate()

  const handleLogOut=async()=>{
    try {
      const result=await axiosInstance.post('/auth/logout')
      console.log(result.data.message)
      getCurrentUser()
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-[100vw]  h-[70px] bg-[#ecfafaec] z-10  fixed top-0 flex items-center justify-between px-[30px]  shadow-md shadow-black'>

      <div className='w-[20%] lg:w-[30%] flex items-center justify-start  cursor-pointer gap-[6px]'>
        <img src={logo} alt="" className='w-[40px]' />
        <h1 className='text-[25px] text-[black] font-serif'>OneCart</h1>
      </div>
      
      <div className='w-[50%] lg:w-[40%] hidden md:flex'>
        <ul className='flex items-center justify-center gap-[15px] text-[white]'>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate('/')}>HOME</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate('/collections')}>COLLECTIONS</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate('/about')}>ABOUT</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'onClick={()=>navigate('/contact')}>CONTACT</li>
        </ul> 
      </div>

      <div className='w-[30%] flex items-center justify-end gap-[20px]'>

         {!showSearch? <IoSearchCircleOutline   className='w-[38px] h-[38px] cursor-pointer ' onClick={()=>{setShowSearch(prev=>!prev)}} />: <IoSearchCircleSharp className='w-[38px] h-[38px] cursor-pointer ' onClick={()=>{setShowSearch(prev=>!prev)}} />}

         {!userData ? <FaCircleUser className='w-[29px] h-[29px] cursor-pointer ' onClick={()=>{setShowProfile(prev=>!prev)}} />:
           <div className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center cursor-pointer' onClick={()=>{setShowProfile(prev=>!prev)}}>{userData?.name.slice(0,1).toUpperCase()}</div>}

         <FaCartShopping className='w-[30px] h-[30px] cursor-pointer text-[#000000] hidden md:block'/>
         <p className='absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px] hidden md:block' >10</p>
      </div>

     { showSearch && <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center '>
        <input type="text" className='w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white ' placeholder='Search Here' />
      </div>}
       
       {showProfile&&<div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10'>
       <ul className='w-[100%] h-100% flex items-start justify-around flex-col text-[17px] text-[white]'>
       {userData? <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{handleLogOut();setShowProfile(false)
       }}>Logout</li>:
        <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate('/login');setShowProfile(false)}}>LogIn</li>}
        <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'>Orders</li>
        <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'>About</li>
       </ul>
       </div>}

       <div className='w-[100vw] h-[80px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden'>
         <button className=' text-[white]  text-[20px] flex items-center  flex-col justify-center gap-[5px]'><IoIosHome className='w-[30px] h-[30px] text-[white] md:hidden'/> Home</button>

          <button className=' text-[white] text-[20px]  flex items-center justify-center flex-col gap-[5px]'><HiOutlineCollection
          className='w-[30px] h-[30px] text-[white] md:hidden'/>Collection</button>

           <button className=' text-[white] text-[20px] flex items-center justify-center flex-col gap-[5px]'><MdContacts className='w-[30px] h-[30px] text-[white] md:hidden'/>Contact</button>

            <button className=' text-[white] text-[20px] flex items-center justify-center flex-col gap-[5px]'><FaCartShopping className='w-[30px] h-[30px] text-[white] md:hidden'/> Cart</button>
            

       </div>

    </div>
  )
}

export default Navbar