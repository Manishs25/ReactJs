import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate=useNavigate()
        
    const message="Hiiiii";

    const sendInfo=()=>{
        if(message){
        navigate(`/about/${message}`)
        }
    }
    return(
        <div>
            <center>
            <h1>Home Component</h1>
            <p>This is Home Component</p>
            <button onClick={sendInfo}>Send</button>
            </center>
        </div>
    )
}

export default Home