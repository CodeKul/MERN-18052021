import React, { Component } from 'react'
import ShowLoginStatus from './ShowLoginStatus'
export class HandleLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false 
        }
    }

    logout=()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
    
    login=()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
    render() {
        return (
            <div style={{margin:"200px"}}>
                {this.state.isLoggedIn? 
                <button onClick={this.logout}>Logout</button>:

                <button onClick={this.login}>Login</button>}

                <ShowLoginStatus a={this.state.isLoggedIn}/>
            </div>
        )
    }
}

export default HandleLogin
