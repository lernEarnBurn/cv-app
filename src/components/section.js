import React from "react";
import '../css/section.css'
import { Input } from "./input";

export class Section extends React.Component {
    constructor(){
        super()
        this.state = {texts : ['', '', '', '']}
        this.sendUpToParent = this.sendUpToParent.bind(this)
    }


    sendUpToParent(value, id){
        let updatedTexts = this.state.texts
        updatedTexts[id - 1] = value
        this.setState({texts : updatedTexts})
     

        const { updateText } = this.props
        updateText(this.state.texts)
    }

   
    render(){
        return <div className="section-container">
                    <h2 className="header">{this.props.header}</h2>
                    <Input name={this.props.name1} updateParentsText={this.sendUpToParent} id={1}/>
                    <Input name={this.props.name2} updateParentsText={this.sendUpToParent} id={2}/>      
                    <Input name={this.props.name4} type={this.props.type2} updateParentsText={this.sendUpToParent} id={3}/>              
                    <Input name={this.props.name3} type={this.props.type1} updateParentsText={this.sendUpToParent} id={4}/>      
               </div>
    }
}