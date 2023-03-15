import React from "react";
import '../css/section.css'
import { Input } from "./input";

export class Section extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className="section-container">
                    <h2 className="header">{this.props.header}</h2>
                    <Input name={this.props.name1}/>
                    <Input name={this.props.name2}/>      
                    <Input name={this.props.name3}/>      
                    <Input name={this.props.name4}/>               
               </div>
    }
}