import React from "react";
import '../css/page.css'
import { Toggler } from "./viewToggler";
import { Section } from "./section";


export class Page extends React.Component {
    constructor(){
        super()
        this.state = {viewMode : false}
        this.isViewMode = this.isViewMode.bind(this)
    }

    isViewMode = (bool) => {
        this.setState({ viewMode: bool });
      }

    
    render(){

        return <div>{(!this.state.viewMode) ? 
            <div className="main-container">
                <Toggler isViewMode={this.isViewMode}/>
                <div className="page">
                    <div className="background-container">
                        <h1 className="title">CV-Maker</h1>
                    </div>
                    <Section header="General Information" name1="First Name" name2="Last Name" name3="Email" name4="Phone Number"/>
                    <Section header="Educational Experience" name1="School Name" name2="Title of Study" type1="date" type2="date"/> 
                    <Section header="Practical Experience" name1="Company Name" name2="Position" type1="date" type2="date"/> 
                </div>
            </div> 

            :

            <div className="main-container">
                <Toggler isViewMode={this.isViewMode}/>
                <div className="page">
                    <div className="background-container">
                        <h1 className="title">CV-Maker</h1>
                    </div>
                </div>
            </div>
        }</div>

    
    }
}