import React, { useEffect, useState } from 'react'

function EffectDemo2() {
    const[c,setC]=useState(0)
    const[country,setCountry]=useState("")
    useEffect(()=>{
        fetch(`https://covid19.mathdro.id/api/countries/${country}`)
        .then((res)=>res.json())
        .then((result)=>console.log(result))
    },[country])

    // const handleCountryInput=(e)=>{
    //     console.log(e.target.value)
    //     setCountry(e.target.value)
    // }

    const handleClick=(e)=>{
        e.preventDefault()
       console.log(e.target)
       setCountry(e.target.ctry.value)
    }
    return (
        <div>
           <h2>Covid Data</h2>
           <p>{c}</p>
           <button onClick={()=>setC(c+1)}>Increment</button> 
           
           <p>Enter your country</p>
           <form onSubmit={handleClick}>
           <input type="text" name="ctry"/>
          
           </form>
        </div>
    )
}

export default EffectDemo2
