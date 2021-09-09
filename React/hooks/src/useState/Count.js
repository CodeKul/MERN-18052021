import React,{useState} from 'react'

function Count() {
    //state,function to change the state  ,initial value of the state
    //let result = useState(5)
    //console.log(result)
    
    const[count,setCount] =useState(0)
    
    
    let increment=()=>{
        // setCount(count+1)
       setCount((p)=>p+1)
       setCount((p)=>p+1)

    }
   

    let decrement=()=>{
        setCount(count-1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment Counter</button>
            <button onClick={decrement}>Decrement Counter</button>
        </div>
    )
}

export default Count
