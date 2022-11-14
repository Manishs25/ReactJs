import React from "react";

function AddInput(){

    const[val,setVal]=React.useState(' ')

    const[city,setcity]=React.useState(' ')

    const setValue=(event)=>{
        setVal(event.target.value);
    }

    const displayValue=()=>{
        setcity(val)

    }

    return(
        <div>
            
            <label>City :</label>
            <input type="name" onChange={setValue}></input>

            <button type="button" onClick={displayValue}>Add</button>

            <p>City : {city}</p>

        </div>
    )
}

export default AddInput
