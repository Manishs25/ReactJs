import React from "react";

function CallBackEvent(){
 

    const[text,setText]=React.useState('')

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    return(
        <div>
            <h1>Call Back event Demo</h1>
            <p>Text : {text}</p>
            <CheckCallBack onInputChange={handleChange}/>
        </div>
    )

}

function CheckCallBack({onInputChange}){
        return(
            <div>
                <h2>Child Component!!</h2>
                <input type="text" onChange={onInputChange}/>
            </div>
        )

}

export default CallBackEvent