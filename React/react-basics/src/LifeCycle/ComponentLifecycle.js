import React, { Component } from 'react'
import ModalComponent from './ModalComponent'
export class ComponentLifecycle extends Component {
    // Lifecycle - Mounting,Updation,Unmounting
    //useState()
    constructor(props) {
        super(props)
    
        this.state = {
            message:"Welcome" 
        }

        console.log("Inside constructor")

    }
    // api/customers/getbyId/id
    componentDidMount(){
        console.log("Component Did Mount")
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    

    shouldComponentUpdate(){
        console.log("should component update")
        return true
    }

    onMessageChange=()=>{
       console.log("event handler")
        this.setState({message:"Hello World"})
    }

    //clearInterval,clear
    

    render() {
        console.log("Inside Render")
        return (
            <div>
                <h1>Rendered</h1>
                <h4>{this.state.message}</h4>
                {/* <ModalComponent/> */}
                <button onClick={this.onMessageChange}>Change Message</button>
            </div>
        )
    }
}

export default ComponentLifecycle
