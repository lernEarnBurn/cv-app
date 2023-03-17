import React from "react";
import '../css/page.css'
import { Toggler } from "./viewToggler";
import { Section } from "./section";
import { ViewSection } from "./viewSection";


export class Page extends React.Component {
    constructor(props){
        super(props)
        this.state = {viewMode : false}
        this.isViewMode = this.isViewMode.bind(this)
        this.updateText = this.updateText.bind(this)
    }

    isViewMode = (bool) => {
        this.setState({ viewMode: bool });
    }
    //WORKS up to this level now need to get it down

    updateText(texts){
        const { displayTexts } = this.props
        displayTexts(texts)
    }
    
    render(){

        return <div>{(!this.state.viewMode) ? 
            <div className="main-container">
                <Toggler isViewMode={this.isViewMode}/>
                <div className="page">
                    <div className="background-container">
                        <h1 className="title">CV-Maker</h1>
                    </div>
                    <Section header="General Information" name1="First Name" name2="Last Name" name3="Email" name4="Phone Number" updateText={this.updateText}/>
                    <Section header="Educational Experience" name1="School Name" name2="Title of Study" type1="date" type2="date" updateText={this.updateText}/> 
                    <Section header="Practical Experience" name1="Company Name" name2="Position" type1="date" type2="date" updateText={this.updateText}/>  
                </div>
            </div> 

            :

            <div className="main-container">
                <Toggler isViewMode={this.isViewMode}/>
                <div className="page">
                    <div className="background-container">
                        <h1 className="title">CV-Maker</h1>
                    </div>
                    <ViewSection header="General Information" displayTexts={this.updateText}/>
                    <ViewSection header="Educational Experience" displayTexts={this.updateText}/>
                    <ViewSection header="Practical Experience" displayTexts={this.updateText}/>
                </div>
            </div>
        }</div>

    
    }
}