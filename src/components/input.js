import React from "react";
import '../css/input.css'

export class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {text : ''}
    }

    render(){
        return  <div className="input-container">
                    <input className="input" placeholder={this.props.name}></input>
                </div>
    }
}