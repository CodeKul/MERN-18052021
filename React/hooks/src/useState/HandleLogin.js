import React, { useState } from 'react'
import Logout from './Logout'
import Login from './Login'
import ShowMessage from './ShowMessage'

function HandleLogin() {
    const[loggedIn,setLoggedIn]=useState(false)

    const login=()=>{
        setLoggedIn(!loggedIn)
    }

    const logout=()=>{
        setLoggedIn(!loggedIn)
    }
    return (
        <div style={{margin:"100px"}}>
            {loggedIn ? 
            <Logout handleLogout={logout}/>: 
            <Login handleLogin={login}/>}
            <ShowMessage loggedIn={loggedIn}/>
        </div>
    )
}

export default HandleLogin
