import React from 'react'
import Content from './Content'
function Child({username}) {
    return (
        <div>
            <h1>Child Component</h1>
            <Content username={username}/>
        </div>
    )
}

export default Child
