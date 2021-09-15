import React, { useRef } from 'react'

function RefDemo() {
    const sampleRef = useRef()
    console.log(sampleRef)
    const handleClick=()=>{
        sampleRef.current.focus()
        sampleRef.current.style.backgroundColor="green"
        console.log(sampleRef.current.value)
    }
    return (
        <div style={{margin:"100px"}}>
            <label htmlFor="val">Enter value</label>
            <input type="text" ref={sampleRef}/>
            <button onClick={handleClick}>Focus Input</button>
        </div>
    )
}
//1)Accessing DOM elements
//2)values to persist between renders

//useRef 
//1)does not rerender on change
//2)value persist between rerender
export default RefDemo
