import React from 'react'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Defaultlayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Defaultlayout
