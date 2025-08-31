import {Route, Routes } from "react-router-dom"
import { RegistrationPage } from "./pages/RegistrationPage.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import { LoginPage } from "./pages/LoginPage.jsx"
import Navbar from "./component/Navbar.jsx"

export const  App=()=>{
  return(
  <>
  <Navbar/>
    <Routes>
      <Route path="/signup" element={<RegistrationPage/>}/> 
      <Route path="/" element={<HomePage/>}/>  
      <Route path="/login" element={<LoginPage/>}/>   
    </Routes>
  </>
  )
}