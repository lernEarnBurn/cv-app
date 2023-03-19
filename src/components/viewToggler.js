import React from "react";
import '../css/viewToggler.css'

export function Toggler(props){

    function processClasses(nonTargetClass, event){
        event.target.classList.add("active")
        event.target.classList.remove("inactive")
        document.querySelector(nonTargetClass).classList.add("inactive")
        document.querySelector(nonTargetClass).classList.remove("active")
    }

    function toggleMode(event){
        if(event.target.classList.contains("update")){
            processClasses('.view', event)  
            props.changeViewMode()
        }else if(event.target.classList.contains("view")){
            processClasses('.update', event)
            props.changeViewMode()
        }
    }

    return (
        <div className="toggler">
            <div onClick={toggleMode} className="half update active">Update</div>
            <div onClick={toggleMode} className="half view inactive">View</div>
        </div> 
    ) 
} 

