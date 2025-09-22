import  { useEffect, useState } from 'react'
import Nav from '../components/Nav.jsx'
import Side from '../components/Side.jsx'
import { axiosInstance } from '../utils/axios.js'
import { RiDeleteBin6Line } from "react-icons/ri";
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
  
  const handleRemoveProduct=async(id)=>{
    try {
      const result=await axiosInstance.post(`/product/remove/${id}`,{})
      if(result.data){
        handleListProduct()
      }
      else{
        console.log("Failed to remove product")
      }
    } catch (error) {
      console.log("error in handleRemoveProduct" ,error )
      
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

          {list?.length>0?(
          list.map((item,index)=>(
            <div className='w-[90%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px]' key={index}>
              <img src={item.image1} className='w-[30%] md:w-[120px] h-[90%] rounded-lg' alt="" />
              <div className='w-[90%] h-[80%]  flex flex-col items-start justify-center gap-[2px]'>
                <div className='w-[100%] md:text-[20px] text-[15px] text-[#bef0f3]'>{item.name}</div>
                <div className='md:text-[17px] text-[15px] text-[#bef3da]'>{item.category}</div>
                 <div className='md:text-[17px] text-[15px] text-[#bef3da]'>₹{item.price}</div>
              </div>
              <div className='w-[10%] h-[100%] bg-transparent flex items-center justify-center'>
                <RiDeleteBin6Line className='w-[30px] h-[20%] flex items-center justify-center rounded-md md:hover:bg-red-300 md:hover:text-black cursor-pointer' onClick={()=>handleRemoveProduct(item._id)}/>
              </div>
            </div>
          ))   
          ):(
          
         <div className='text-white text-lg'>No Product Available</div>

          )}
        </div>
      </div>
    </div>
  )

}
export default Lists