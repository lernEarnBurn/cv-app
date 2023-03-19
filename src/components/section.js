import React from "react";
import '../css/section.css'


export function Section(props){

    function updateText(){
        return
    }

    return (
        <div className="section-container">
            <h2 className="header">{props.header}</h2>
            <input className="input"  placeholder={props.name1} onChange={updateText}></input>
            <input className="input"  placeholder={props.name2} onChange={updateText}></input>
            <input className="input" type={props.type2} placeholder={props.name3} onChange={updateText}></input>
            <input className="input" type={props.type2} placeholder={props.name4} onChange={updateText}></input>    
        </div>
    )
}
