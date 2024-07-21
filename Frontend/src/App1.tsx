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
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
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
