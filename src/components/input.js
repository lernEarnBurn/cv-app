import React from "react";
import '../css/input.css'

export class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {text : ''}
    }

    render(){
        return  <div className="input-container">
                    <label className="input-label">{this.props.label}</label>
                    <input className="input" type={this.props.type} placeholder={this.props.name}></input>
                </div>
    }
}