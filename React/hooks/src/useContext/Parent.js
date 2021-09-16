import React,{useContext} from 'react'
import { userContext } from '../App'
import Child from './Child'
function Parent({username}) {
    const user =useContext(userContext)
    return (
        <div>
            <h1>Parent Component</h1>
            <h3>Username is: {user}</h3>
            <Child username={username}/>
        </div>
    )
}

export default Parent
