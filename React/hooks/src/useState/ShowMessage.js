import React from 'react'

function ShowMessage(props) {
    return (
        <div>
            {props.loggedIn? "Welcome User": "Please Login"}
        </div>
    )
}

export default ShowMessage
