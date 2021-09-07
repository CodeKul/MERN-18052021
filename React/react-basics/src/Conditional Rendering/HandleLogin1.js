import React, { Component } from 'react'
import ShowLoginStatus from './ShowLoginStatus'
import Logout from './Logout'
import Login from './Login'
export class HandleLogin1 extends Component {
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
               {this.state.isLoggedIn ? 
                <Logout handleLogout={this.logout}/> : 

                <Login handleLogin={this.login}/>}

                <ShowLoginStatus isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}

export default HandleLogin1
