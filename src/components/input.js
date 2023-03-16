import React from "react";
import '../css/input.css'
import { Save } from "./saveBtn";

export class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {text : ''}
    }

    render(){
        return  <div className="input-container">
                    <input className="input" type={this.props.type} placeholder={this.props.name}></input>
                    <Save/>
                </div>
    }
}