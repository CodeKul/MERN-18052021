import React,{useEffect, useState} from 'react'

function EffectDemo() {
    
    //useEffect(()=>{},[optional dependency array])
    //useEffect(()=>{}) --> executed on each rerender
    //useEffect(()=>{},[]) --> executed once(first render)
    //useEffect(()=>{},[state,props]) -->executed when state/prop changes
    const[render,setRender]=useState(0)
    const[norender,setNoRender]=useState(0)
    useEffect(() => {
       console.log("I have rendered")
        
    },[render])

    const handleRender=()=>{
        setRender(r=>r+1)
    }
    return (
        <div style={{margin:"100px"}}>
            <h3>{render}</h3>
            <button onClick={handleRender}>Re-render</button>

            <h3>{norender}</h3>
            <button onClick={()=>setNoRender(nr=>nr+1)}>NO Render</button>
        </div>
    )
}

export default EffectDemo
