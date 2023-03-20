import React from "react";
import '../css/section.css'


export function ViewSection(props){

    function whichSection(){
        if(props.header === 'General Information'){
            return 0
        }else if(props.header === 'Educational Experience'){
            return 1 
        }else if(props.header === 'Practical Experience'){
            return 2
        }
    }

    return (
        <div className="section-container">
                    <h2 className="header">{props.header}</h2>
                     <p>{props.textState[whichSection()][0]}</p>
                     <p>{props.textState[whichSection()][1]}</p>
                     <p>{props.textState[whichSection()][2]}</p>
                     <p>{props.textState[whichSection()][3]}</p>
                </div>
    )
}

