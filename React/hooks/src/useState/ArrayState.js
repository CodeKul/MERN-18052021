import React, { useState } from 'react'

function ArrayState() {
    const[list,setList]=useState(["One","Two","Three","Four"])
    const addNew=()=>{
        setList([...list,"Five"])
    }
    return (
        <div>
            <button onClick={addNew}>Add New</button>

            {list.map((l,id)=>(
                <>
                    <li>{l}</li>
                </>
            ))}
        </div>
    )
}

export default ArrayState
