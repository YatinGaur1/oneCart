import Nav from "../components/Nav.jsx"
import Side from "../components/Side.jsx"
import upload from '../assets/upload.png'
import { useState } from "react"
import { axiosInstance } from "../utils/axios.js"
function Add() {
   let [image1,setImage1]=useState(false)
   let [image2,setImage2]=useState(false)
   let [image3,setImage3]=useState(false)
   let [image4,setImage4]=useState(false)
   let [name,setName]=useState("")
   let [cagetory,setCategory]=useState("Men")
   let[subCategory,setSubCategory]=useState("Topwear")
   let[price,setPrice]=useState("")
   let[description,setDescription]=useState("")
   let[bestSeller,setBestSeller]=useState(false)
   let[sizes,setSizes]=useState([])

   const handleAddProduct=async(e)=>{
    e.preventDefault()
    try {
      let formData=new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("category",cagetory)
      formData.append("subCategory",subCategory)
      formData.append("price",price)
      formData.append("bestSeller",bestSeller)
      formData.append("sizes",JSON.stringify(sizes))
      formData.append("image1",image1)
      formData.append("image2",image2)
      formData.append("image3",image3)
      formData.append("image4",image4)

      let result=await axiosInstance.post("/product/addProduct",formData)
       console.log(result.data)

       if(result.data)
       {
        setName("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setBestSeller(false)
        setPrice("")
        setSizes([])
        setCategory("Men")
        setSubCategory("Topwear")
        setDescription("")
       }
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <div className="w-[100vw] min-h-[100vh]  bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] overflow-x-hidden relative ">
      <Nav/>
      <Side/>
      <div className="w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden  absolute right-0  bottom-[15px]">

        <form action="" onSubmit={handleAddProduct} className="w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]">

        <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-[white] font-serif ">Add Product Page</div>

        <div className="w-[80%] h-[130px] flex flex-col items-start justify-center mt-[20px] gap-[10px]">
          <p className="text-[20px] md:text-[30px] font-serif">Upload Images</p>
          <div className="w-[100%] h-[100%] flex items-center justify-start">

            <label htmlFor="image1" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]">

              <img src={!image1?upload: URL.createObjectURL(image1)} alt="" className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"/>

              <input type="file" id="image1" hidden onChange={(e)=>{setImage1(e.target.files[0])}} required />

            </label>

             <label htmlFor="image2" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]">

              <img src={!image2?upload: URL.createObjectURL(image2)} alt="" className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"/>

              <input type="file" id="image2" hidden onChange={(e)=>{setImage2(e.target.files[0])}}  required/>

            </label>

             <label htmlFor="image3" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]">

              <img src={!image3?upload: URL.createObjectURL(image3)} alt="" className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"/>

              <input type="file" id="image3" hidden onChange={(e)=>{setImage3(e.target.files[0])}} required/>

            </label>

             <label htmlFor="image4" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]">

              <img src={!image4?upload: URL.createObjectURL(image4)} alt="" className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"/>

              <input type="file" id="image4" hidden onChange={(e)=>{setImage4(e.target.files[0])}} required/>

            </label>
          </div>
        </div>
        
        <div className="w-[80%] h-[100%] flex flex-col items-start justify-center gap-[10px]">
          <p className="text-[20px] md:text-[30px] font-serif">Product Name</p>
          <input  type="text" placeholder="Type here"  className="w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffffc2] " required  onChange={(e)=>{setName(e.target.value)}} value={name}/>
        </div>

         <div className="w-[80%]  flex flex-col items-start justify-center gap-[10px]">
          <p className="text-[20px] md:text-[30px] font-serif">Product Description</p>
          <textarea  type="text" placeholder="Type here"  className="w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px]  pt-[10px] text-[18px] placeholder:text-[#ffffffc2] " required onChange={(e)=>setDescription(e.target.value)} value={description}/>
        </div>

        <div className="w-[80%] flex items-center flex-wrap gap-[10px]">
          <div className="md:w-[30%] w-[100%] flex itmes-start flex-col sm:justify-center gap-[10px]">
            <p className="text-[20px] md:text-[30px] font-serif w-[100%]">Product Category</p>
            <select name="" id="" className="bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg border-[2px] hover:border-[#46d1f7]" onChange={(e)=>{setCategory(e.target.value)}} value={cagetory}>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

           <div className="md:w-[30%] w-[100%] flex itmes-start flex-col sm:justify-center gap-[10px]">
            <p className="text-[20px] md:text-[30px] font-serif w-[100%]">Sub-Category</p>
            <select name="" id="" className="bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg border-[2px] hover:border-[#46d1f7]" onChange={(e)=>{setSubCategory(e.target.value)}} value={subCategory}>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
        </div>

        <div className="w-[80%] h-[100%] flex flex-col items-start justify-center gap-[10px]">
          <p className="text-[20px] md:text-[30px] font-serif">Product Price</p>
          <input  type="Number" placeholder="₹ 2000"  className="w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffffc2]" required onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
        </div>

          <div className="w-[80%] h-[220px] md:h-[100px] flex flex-col items-start justify-center gap-[10px] py-[10px] md:py-[0px]">
            <p className="text-[20px] md:text-[30px] font-serif">Product Size</p>
            <div className="flex items-center justify-start gap-[15px] flex-wrap">
              
              <div className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes('S')?"bg-green-200 text-black border-[#46d1f7]":"  bg-slate-600"}`} onClick={()=>setSizes(prev=>prev.includes('S')? prev.filter(item=>item!=='S'):[...prev,'S'])}>S</div>
               
              <div className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes('M')?"bg-green-200 text-black border-[#46d1f7]":" bg-slate-600"}`} onClick={()=>setSizes(prev=>prev.includes('M')? prev.filter(item=>item!=='M'):[...prev,'M'])}>M</div>

              <div className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes('L')?"bg-green-200 text-black border-[#46d1f7]":" bg-slate-600"}`} onClick={()=>setSizes(prev=>prev.includes('L')? prev.filter(item=>item!=='L'):[...prev,'L'])}>L</div>

              <div className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes('XL')?"bg-green-200 text-black border-[#46d1f7]":" bg-slate-600"}`} onClick={()=>setSizes(prev=>prev.includes('XL')? prev.filter(item=>item!=='XL'):[...prev,'XL'])}>XL</div>

              <div className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes('XXL')?"bg-green-200 text-black border-[#46d1f7]":" bg-slate-600"}`} onClick={()=>setSizes(prev=>prev.includes('XXL')? prev.filter(item=>item!=='XXL'):[...prev,'XXL'])}>XXL</div>
            </div>
          </div>

          <div className="w-[80%] flex items-center justify-start gap-[10px] mt-[20px]">
            <input type="checkbox" id="checkbox" className="w-[25px] h-[25px] cursor-pointer"  onChange={()=>{setBestSeller(prev=>!prev)}} checked={bestSeller}/>
            <label htmlFor="checkbox" className="text-[18px] md:text-[22px] font-serif cursor-pointer">Add to BestSeller</label>
          </div>

          <button className="w-[140px] px-[20px] py-[20px] rounded-xl bg-[#65d8f7] flex items-center justify-center gap-[10px] text-black active:bg-slate-700 active:text-white  active:border-[2px] border-white cursor-pointer font-serif ">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default Add