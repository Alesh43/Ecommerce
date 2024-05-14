import React from 'react'
interface Props{
    FirstName: string,
    LastName?: string,
    Age?: number,
    Address?: string,
    onClick?: any,
}

const Display = ({
    FirstName,
    LastName,
    Age,
    Address,
    onClick
}:Props) => {
  return (
    <div>
      <p>{FirstName}</p>
      <p>{LastName}</p>
      <p>{Age}</p>
      <p>{Address}</p>
      <button type="button" onClick={onClick}>Click Me</button>
    </div>
  )
}

export default Display
