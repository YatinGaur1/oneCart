import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { userDataContext } from '../context/UserContext';
function Navbar() {
  const{userData}=useContext(userDataContext)
  return (
    <div className='w-[100vw]  h-[70px] bg-[#ecfafaec] z-10  fixed top-0 flex items-center justify-between px-[30px]  shadow-md shadow-black'>

      <div className='w-[30%] flex items-center justify-start  cursor-pointer gap-[6px]'>
        <img src={logo} alt="" className='w-[40px]' />
        <h1 className='text-[25px] text-[black] font-serif'>OneCart</h1>
      </div>
      
      <div className='w-[40%]'>
        <ul className='flex items-center justify-center gap-[15px] text-[white]'>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>HOME</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>COLLECTIONS</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>ABOUT</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>CONTACT</li>
        </ul>
      </div>

      <div className='w-[30%] flex items-center justify-end gap-[20px]'>
          <IoSearchCircleSharp className='w-[38px] h-[38px] cursor-pointer text-[#000000]'/>
         {!userData&&<FaCircleUser className='w-[29px] h-[29px] cursor-pointer text-[#000000]' />}
          { userData && <div className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center'>{userData?.name.slice(0,1)}</div>}
         <FaCartShopping className='w-[30px] h-[30px] cursor-pointer text-[#000000]'/>
         <p className='absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px]'>10</p>

      </div>

    </div>
  )
}

export default Navbar