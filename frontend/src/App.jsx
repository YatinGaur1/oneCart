import {Navigate, Route, Routes, useLocation } from "react-router-dom"
import { RegistrationPage } from "./pages/RegistrationPage.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import { LoginPage } from "./pages/LoginPage.jsx"
import Navbar from "./component/Navbar.jsx"
import { useContext } from "react"
import { userDataContext } from "./context/UserContext.jsx"
import About from "./pages/About.jsx"
import Collections from "./pages/Collections.jsx"
import Products from "./pages/Products.jsx"
import Contact from "./pages/Contact.jsx"

export const  App=()=>{
  let {userData}=useContext(userDataContext)
  let location=useLocation()
  return(
  <>
   {userData&&<Navbar/>} 
    <Routes>
      <Route path="/login" element={userData?(<Navigate to={location.state?.from || "/"}/>):<LoginPage/>}/> 
      
      <Route path="/signup" element={userData?(<Navigate to={location.state?.from || "/"}/>):<RegistrationPage/>}/> 

      <Route path="/" element={userData?<HomePage/>:<Navigate to='/login' state={{from:location.pathname}}/>} />  
       
      <Route path="/about" element={userData?<About/>:<Navigate to='/login' state={{from:location.pathname}}/>}/> 

      <Route path="/collections" element={userData?<Collections/>:<Navigate to='/login' state={{from:location.pathname}}/>}/> 

      <Route path="/products" element={userData?<Products/>:<Navigate to='/login' state={{from:location.pathname}}/>}/>  

      <Route path="/contact" element={userData?<Contact/>:<Navigate to='/login' state={{from:location.pathname}}/>}/>

    </Routes>
  </>
  )
}