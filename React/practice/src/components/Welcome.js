import React from 'react'

function Welcome(props) {

    console.log(props)
    // props.username="poq"
    return (
        <div>
            <h1>Welcome {props.username}</h1>
            <h3>Your id is {props.userid}</h3>
        </div>
    )
}

export default Welcome
