import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Display from './component/Display'

const App = () => {

  const handleClick = () =>{
    console.log("Clicked")

  }
  return (
    <div>
      <Header/>
      <Display
        FirstName={'Alesh'}
        LastName={'Maharjan'}
        Age={27}
        Address={'Satungal'}
        onClick={handleClick}
      />
      <Footer/>
    </div>
  )
}

export default App
