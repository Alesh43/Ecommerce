
import React, { useEffect } from 'react'
// import Sidebar from '../Side-bar'
import { Outlet, useNavigate } from 'react-router-dom'
import { SideBar } from '../Side-bar'
import { useAuth } from '../../Hooks/useAuth';
// import { SideBar } from '../Side-bar'

const Authlayout = () => {
  const navigate = useNavigate();
  const {accessToken} = useAuth();
  console.log(accessToken)

  useEffect(()=>{
  if(accessToken === undefined){
    navigate('/signin')
  }
}, [accessToken, navigate]) 
  
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Authlayout
