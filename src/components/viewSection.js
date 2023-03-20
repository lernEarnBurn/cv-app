import React from "react";
import '../css/section.css'
import '../css/viewSection.css'


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

    function formatNumber(number){
        
        if(number.length === 10){
            return `(${number[0]}${number[1]}${number[2]}-${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}${number[8]}${number[9]}`
        }
    }

    return (
        <React.Fragment>
            {(whichSection() === 0)  ?  
                <div className="section-container view-section-container">
                    <h2 className="header">{props.header}</h2>
                    <div className="name">
                        <p>{props.textState[whichSection()][0]}</p>
                        <p>{props.textState[whichSection()][1]}</p>
                    </div>
                    <p>{props.textState[whichSection()][2]}</p>
                    <p>{formatNumber(props.textState[whichSection()][3])}</p>
                </div>
                
                :

                <div className="section-container view-section-container">
                    <h2 className="header">{props.header}</h2>
                        <p>{props.textState[whichSection()][0]}</p>
                        <p>{props.textState[whichSection()][1]}</p>
                        {(props.textState[whichSection()][3] !== "") ? 
                        
                            <p>{props.textState[whichSection()][2]}  to  {props.textState[whichSection()][3]}</p>

                        :

                            <p>{props.textState[whichSection()][2]} to Current</p>
                            
                        }
                   
                </div>
            }
        </React.Fragment>
       
    )
}

