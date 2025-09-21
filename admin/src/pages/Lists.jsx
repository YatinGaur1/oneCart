import  { useEffect, useState } from 'react'
import Nav from '../components/Nav.jsx'
import Side from '../components/Side.jsx'
import { axiosInstance } from '../utils/axios.js'
function Lists() {
  const [list,setList]=useState([])

  const handleListProduct=async()=>{
    try {
      const result=await axiosInstance.get("/product/getProduct")
      setList(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error) 
    }
  }

  useEffect(()=>{
     handleListProduct()
  },[])

  return (
    <div className='w-[100vw] min-h-[100vh]  bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white]'>
      <Nav/>
      <div className='w-[100%] h-[100%] flex items-center justify-start'>
        <Side/>


        <div className='w-[82%] h-[100%] lg:ml-[350px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]'>
          <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white font-serif'>All Listed Products</div>
        </div>
      </div>
    </div>
  )
}

export default Lists