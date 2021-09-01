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


        this.setState((prevState,props)=>({counter:prevState.counter+this.props.incBy}))
       
    }

    multipleIncrement(){
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()

    }
    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={()=>this.multipleIncrement()}>Increase Count</button>
            </div>
        )
    }
}

export default Counter
