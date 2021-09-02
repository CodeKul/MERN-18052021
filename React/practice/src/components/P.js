import React, { Children, Component } from 'react'
import C from './C'
export class P extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"Hello"
        }
    }

    getInfo=()=>{
        this.setState({msg:"Hi"})
    }
    
    render() {
        return (
            <div>
                {this.state.msg}
                <C info={this.getInfo}/>
            </div>
        )
    }
}

export default P

