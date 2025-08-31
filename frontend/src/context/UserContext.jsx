import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios.js";

export const userDataContext=createContext();

function UserContext({children}){
    let[userData,setUserData]=useState("")
    const getCurrentUser=async()=>{
        try {
            const result=await axiosInstance.get('/user/getcurrentuser')

            setUserData(result.data)
            console.log(result.data)
           
        } catch (error) {
            setUserData(null)
            console.log("error in getuser")
            
        }
    }

    let value={userData,setUserData,getCurrentUser}
    useEffect(()=>{
       getCurrentUser()
    },[])

   return(
    <userDataContext.Provider value={value}>
        {children}
    </userDataContext.Provider>
   )
}

export default UserContext