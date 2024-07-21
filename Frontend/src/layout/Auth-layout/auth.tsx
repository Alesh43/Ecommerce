import React from 'react'
import Sidebar from '../Side-bar'
import { Outlet } from 'react-router-dom'

const Authlayout = () => {
  return (
    <div>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Authlayout
