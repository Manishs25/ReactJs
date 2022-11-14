// import React from "react"
import React, { useContext, MyContext } from 'react'


function ContextTwo() {
    const {number, setNumber} = useContext(MyContext)

    const handleClick=()=>{
        setNumber(number +5)
    }

  return (
    <div>
        <h3>context Two</h3>
        <p>{number}</p>
        <button onClick={handleClick}>Add 5</button>
    </div>
  )
}

export default ContextTwo