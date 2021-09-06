import React from 'react'

function ShowLoginStatus({isLoggedIn}) {
    //if-else,using element variables,ternary opertor,&&
    
    if(isLoggedIn){
        return <h2>Welcome user</h2>
    }else{
        return <h2>Please Login</h2>
    }
    
}

export default ShowLoginStatus
