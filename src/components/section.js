import React, { useRef, useEffect } from "react";
import '../css/section.css'


export function Section(props){

    const input1 = useRef(null)
    const input2 = useRef(null)
    const input3 = useRef(null)
    const input4 = useRef(null)


    function whichSection(){
        if(props.header === 'General Information'){
            return 0
        }else if(props.header === 'Educational Experience'){
            return 1 
        }else if(props.header === 'Practical Experience'){
            return 2
        }
    }

    

    useEffect(() => {
        if(input1 !== undefined && input2 !== undefined && input3 !== undefined && input4 !== undefined){
            input1.current.value = props.textState[whichSection()][0]
            input2.current.value = props.textState[whichSection()][1]
            input3.current.value = props.textState[whichSection()][2]
            input4.current.value = props.textState[whichSection()][3]
        }
    })


    function updateTextView(){
        let updatedTexts = props.textState

        updatedTexts[whichSection()][0] = input1.current.value
        updatedTexts[whichSection()][1] = input2.current.value
        updatedTexts[whichSection()][2] = input3.current.value
        updatedTexts[whichSection()][3] = input4.current.value

        props.textUpdater(updatedTexts)
    }


    

    return (
        <div className="section-container">
            <h2 className="header">{props.header}</h2>
            <input className="input"  ref={input1}  placeholder={props.name1} onChange={updateTextView}></input>
            <input className="input"   ref={input2}  placeholder={props.name2} onChange={updateTextView}></input>
            <input className="input"   ref={input3} type={props.type2} placeholder={props.name3} onChange={updateTextView}></input>
            <input className="input"   ref={input4} type={props.type2} placeholder={props.name4} onChange={updateTextView}></input>    
        </div>
    )
}
