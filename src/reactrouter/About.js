import React from "react"
import { useParams } from "react-router-dom"

function About(){

    const {message}=useParams()
    return(
        <div>
            <center>
            <h1>About Component</h1>
            <p>This is About Component</p>
            <p>Message is : {message}</p>
            </center>
        </div>
    )
}

export default About