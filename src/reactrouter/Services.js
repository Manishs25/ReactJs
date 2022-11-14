import React from "react"
import {useLocation} from "react-router-dom"

function Services(){

    const location=useLocation()

    return(
        <div>
            <center>          
            <h1>Services Component</h1>
            <p>This is Services Component</p>
            <p>FirstName : {location.state.firstName}</p>
            <p>LastName : {location.state.lastName}</p>
            </center>

        </div>
    )
}
export default Services
