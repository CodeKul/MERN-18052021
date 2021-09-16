import React, { useContext } from 'react'
import { userContext } from '../App'
function Content({username}) {
    const user = useContext(userContext)
    return (
        <div>
            <h1>Content Component</h1>
            <h3>{user}</h3>
        </div>
    )
}

export default Content
