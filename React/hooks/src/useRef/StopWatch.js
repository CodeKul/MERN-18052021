import React, { useState ,useRef} from 'react'

function StopWatch() {
    const[count,setCount]=useState(0)
     const lapseRef = useRef(0)
    
    console.log(lapseRef.current)
    const start=()=>{
       lapseRef.current= setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        console.log(lapseRef.current)
    }

    const stop=()=>{
        
        clearInterval(lapseRef.current)
    //    lapseRef = 0
    }
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}

export default StopWatch
