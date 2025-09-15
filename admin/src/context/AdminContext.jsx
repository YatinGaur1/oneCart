import React, { Children, createContext, useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axios.js'

export const AdminDataContext=createContext()

function AdminContext({children}) {
    let[adminData,setAdminData]=useState(null)

    const getAdmin=async()=>{
        try {
            let result =await axiosInstance.get("/user/getadmin")
            setAdminData(result.data)
            console.log(result.data)
        } catch (error) {
            setAdminData(null)
            console.log(error)
        }
    }
    let value={
        adminData,setAdminData,getAdmin
    }
    useEffect(()=>{
      getAdmin()
    },[])
  return (
    <div>
      <AdminDataContext value={value}> 
        {children}
      </AdminDataContext>
    </div>
  )
}

export default AdminContext