import React from 'react'
import './Display.css'
//JSX
function Display() {
    let firstName="India"
    let employee = {
        id:1,
        name:"xyz",
        city:"Pune"
    }
    let heading = <h1>Display Component</h1>
    let content = (<div>
        <p>Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
        <span>React JS</span>
    </div>)

    function showEmployee(){
        return <p>{employee.name}{employee.city}</p>
    }

    let employees = [{
        id:1,
        name:"xyz",
        city:"Pune"
    },{
        id:2,
        name:"abc",
        city:"Mumbai"
    }]
    return (
        <div id="content">
            {heading}
            {content}
            {showEmployee()}
            {employees.map((e,id)=>(
                <div key={id}>
                    <p>{e.name}</p>
                    <p>{e.city}</p>
                </div>
            ))}
        </div>
    )
}

export default Display

