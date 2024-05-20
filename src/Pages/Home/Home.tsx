import React, { useState } from 'react'
import ReactHook from '../../Hooks/hook'
import Color from '../../Hooks/color';


const Home = () => {
  const [color, setColor] = useState('bg-green-50') ;


  return (
    <div>
      <ReactHook/>
      <div className={`${color} p-20`}>{color}</div>
      <Color
        buttonName='Blue'
        buttonColor='bg-blue-500'
        colorChange={() => setColor("bg-blue-500")}
      />
      <Color
        buttonName='Pink'
        buttonColor='bg-pink-500'
        colorChange={() => setColor("bg-pink-500")}
      />
      <Color
        buttonName='Red'
        buttonColor='bg-red-500'
        colorChange={() => setColor("bg-red-500")}
      />
      <Color
        buttonName='Purple'
        buttonColor='bg-purple-500'
        colorChange={() => setColor("bg-purple-500")}
      />
      
    </div>
  )
}

export default Home
