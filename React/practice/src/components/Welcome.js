import React from 'react'

function Welcome({username,userid}) {

    //  console.log(props)
    // props.username="poq"
    return (
        <div>
            <h1>Welcome {username}</h1>
            <h3>Your id is {userid}</h3>
        </div>
    )
}

export default Welcome
