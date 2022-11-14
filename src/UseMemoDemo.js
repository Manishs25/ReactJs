import React, { useMemo } from "react";

function UseMemoDemo(){


    const users=[
        {
            id:1,
            name:'Max'
        },{
            id:2,
            name:'Peter'
        },{
            id:3,
            name:'Richard'
        }
    ]
    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')
    
    const handleText=(event)=>{
        setText(event.target.value)
    }
    const handleSearch=()=>{
        setSearch(text)
    }
    const filteredData=useMemo(()=>users.filter((user)=>{
        console.log("hiiii");
        return user.name.includes(search)
    }
    ),[search])

    return(
        <div>
            <h1>Use Memo</h1>
            <input type='text' onChange={handleText}/>
            <button type='button' onClick={handleSearch}>Search</button>
            <DisplayUsers userList={filteredData}/>
        </div>
    )
}

function DisplayUsers({userList}){
    return(
        <ul>
            {
                userList&&userList.map((user)=>(
                        <li key= {user.id}>{user.name}</li>
                ))
            }
        </ul>
    )
}

export default UseMemoDemo