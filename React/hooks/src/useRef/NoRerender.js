import React, { useState ,useRef} from 'react'

export default function NoRerender() {
    const[count,setInc]=useState(0)
    const testRef = useRef(0)
    console.log(testRef)

    const handleCount=()=>{
        console.log(count)
        setInc(c=>c+1)
        //
        // testRef.current= testRef.current+1
        // console.log(testRef.current)
    }
    return (
        <div>
            {count}
           { console.log("Rendered")}
            <button onClick={handleCount}>Increment</button>
        </div>
    )
}
