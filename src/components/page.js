import React from "react";
import '../css/page.css'
import { Toggler } from "./viewToggler";
import { Section } from "./section";


export class Page extends React.Component {
    
    render(){

        return   <div className="main-container">
                    <Toggler/>
                    <div className="page">
                        <h1 className="title">CV-Maker</h1>
                        <Section header="General Information" name1="First Name" name2="Last Name" name3="Email" name4="Phone Number"/>
                        <Section header="Educational Experience" name1="School Name" name2="Title of Study" name3="Date Started" name4="Date Completed"/> 
                        <Section header="Practical Experience" name1="Company Name" name2="Position" name3="Date Started" name4="Date Completed"/> 
                    </div>
                </div>
    }
}