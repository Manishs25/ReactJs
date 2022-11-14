import React from "react";
import { useNavigate } from "react-router-dom";

function HomeOne(){
    const userObj={
        firstName:' ',
        lastName:' '
    }

    const[user,setUser]=React.useState(userObj)

    const navigate=useNavigate()

    const handleInput=(event)=>{
        setUser=({...user,[event.target.name]:event.target.value})
    }

    const sendData=()=>{
        if(user.firstName!=='' && user.lastName!==''){
            navigate(`/services`,{
                state:user
            })
        }
    }

    return(
        <div>
            <form id="myform">
                <lable>First Name :</lable>
                <input type='text' name='firstName' onChange={handleInput}></input>

                <lable>Last Name :</lable>
                <input type='text' name='lastName' onChange={handleInput}></input>

                <button type='button' onClick={sendData}>Send</button>
            </form>
        </div>
    )
}

export default HomeOne