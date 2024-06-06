import React from 'react'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Defaultlayout = () => {
  return (
    <div>
      <Header/>
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default Defaultlayout
