import React from "react";
import '../css/section.css'


export class ViewSection extends React.Component {
    render(){
        return  <div className="section-container">
                    <h2 className="header">{this.props.header}</h2>
                     <p>{this.props.value}</p>
                     <p>{this.props.value}</p>
                     <p>{this.props.value}</p>
                     <p>{this.props.value}</p>
                </div>
    }
}