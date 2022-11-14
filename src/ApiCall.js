import React, { useEffect } from "react"
import axios from "axios" 

function ApiCall(){
    
    const[users,setUsers]=React.useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.data)
        .then(res=>{
                setUsers(res)
        })
    },[])
    
    return(
        <div>
            <h1>Users List</h1>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}> {user.name+" | "+ user.username+" | "+user.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}


export default ApiCall