import React from 'react'

function ShowLoginStatus1({isLoggedIn}) {
    //if-else,using element variables,ternary opertor,&&
    let loginMsg
    if(isLoggedIn){
        loginMsg= <h2>Welcome user</h2>
    }else{
        loginMsg= <h2>Please Login</h2>
    }
    return(
        <div>
            {loginMsg}
        </div>
    )
    
}

export default ShowLoginStatus1
