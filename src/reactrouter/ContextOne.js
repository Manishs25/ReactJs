import React, { createContext, useState } from 'react'
// import { ContextTwo } from './reactrouter/ContextTwo'
import ContextTwo from './ContextTwo'

const MyContext = createContext()

function ContextOne() {

    const[number, setNumber] = useState(100)

    const handleClick=()=>{
        setNumber(number+ 10)
    }

  return (
    <MyContext.Provider value={{number, setNumber}}>
      <center>
        <h1>Context One</h1>
        <p>{number}</p>
        <button onClick={handleClick}>Add 10</button>
        </center>
<ContextTwo/>
    </MyContext.Provider>
  )
}

export default ContextOne