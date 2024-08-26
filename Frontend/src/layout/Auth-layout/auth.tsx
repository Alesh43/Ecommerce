
import React, { useEffect } from 'react'
// import Sidebar from '../Side-bar'
import { Outlet, useNavigate } from 'react-router-dom'
import { SideBar } from '../Side-bar'
import { useAuth } from '../../Hooks/useAuth';
// import { SideBar } from '../Side-bar'

const Authlayout = () => {
  const navigate = useNavigate();
  const {accessToken,role} = useAuth();
  console.log(accessToken)

  useEffect(()=>{
  if(accessToken === undefined){
    navigate('/signin')
  }
}, [accessToken, navigate]) 
  
  return (
    <div className=" w-full flex ">
      <SideBar role={role}/>
      
      <div className='ml-72 w-full overflow-hidden'>
      <Outlet/>

      </div>
    </div>
  )
}

export default Authlayout
