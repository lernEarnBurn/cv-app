import React from "react";
import '../css/section.css'
import { ViewText } from "./viewText";

export class ViewSection extends React.Component {
    constructor(){
        super()
        this.displayTexts = this.displayTexts.bind(this)
    }
    
    displayTexts(texts){
        console.log(texts)
    }

    render(){
        return  <div className="section-container">
                    <h2 className="header">{this.props.header}</h2>
                    <ViewText value={this.props.value}/>
                    <ViewText value={this.props.value}/>
                    <ViewText value={this.props.value}/>
                    <ViewText value={this.props.value}/>
                </div>
    }
}