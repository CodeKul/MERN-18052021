import React, { Component } from 'react'

class Counter extends Component {
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
        
    }
    incrementCount(){
        //this.setState({counter:this.state.counter+1},()=> console.log(this.state.counter))
        // this.setState((prevState)=>({counter:prevState.counter+1,
        //                            abc: console.log(prevState)
        //                             }))
        let {incBy}=this.props
        console.log(incBy)
        this.setState((prevState,{incBy})=>({counter:prevState.counter+incBy}))
       
    }

    multipleIncrement(){
        // this.incrementCount()
        // this.incrementCount()
        // this.incrementCount()
        console.log("Increment")

    }
    render() {
        
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.multipleIncrement.bind(this)}>Increase Count</button>
            </div>
        )
    }
}

export default Counter
