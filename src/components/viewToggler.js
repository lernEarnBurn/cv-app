import React from "react";
import '../css/viewToggler.css'

function processClasses(nonTargetClass, event){
    event.target.classList.add("active")
    event.target.classList.remove("inactive")
    document.querySelector(nonTargetClass).classList.add("inactive")
    document.querySelector(nonTargetClass).classList.remove("active")
}

export class Toggler extends React.Component {
    constructor(props){
        super(props)
        this.toggleMode = this.toggleMode.bind(this)
    }

    toggleMode(event){
        const { isViewMode } = this.props

        if(event.target.classList.contains("update")){
            processClasses('.view', event)  
            isViewMode(false)
        }else if(event.target.classList.contains("view")){
            processClasses('.update', event)
            isViewMode(true)
        }
    }

    render(){
        return <div className="toggler">
            <div onClick={this.toggleMode} className="half update active">Update</div>
            <div onClick={this.toggleMode} className="half view inactive">View</div>
        </div>
    }
}