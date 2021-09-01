import React, { Component } from 'react'

class DisplayCity extends Component {
    constructor(){
        super()
        this.state={
            cityName:"Pune"
        }
    }
    changeCity(){
        // this.state.cityName="Mumbai"
        console.log(this.state.cityName)

        this.setState({cityName:"Mumbai"})
    }
    render() {
        return (
            <div>
               {this.state.cityName} 
               <button onClick={()=>this.changeCity()}>Change city</button>
            </div>
        )
    }
}

export default DisplayCity
