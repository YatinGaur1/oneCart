import {Route, Routes } from "react-router-dom"
import { RegistrationPage } from "./pages/RegistrationPage.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import { LoginPage } from "./pages/LoginPage.jsx"
import Navbar from "./component/Navbar.jsx"
import { useContext } from "react"
import { userDataContext } from "./context/UserContext.jsx"

export const  App=()=>{
  let {userData}=useContext(userDataContext)
  return(
  <>
   {userData&&<Navbar/>}
    <Routes>
      <Route path="/signup" element={<RegistrationPage/>}/> 
      <Route path="/" element={<HomePage/>}/>  
      <Route path="/login" element={<LoginPage/>}/>   
    </Routes>
  </>
  )
}