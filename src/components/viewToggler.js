import React from "react";
import '../css/viewToggler.css'

export class Toggler extends React.Component {
    constructor(){
        super()
        this.state = {viewMode : false}
    }

    render(){
        return <div className="toggler">
            <div className="half update active">Update</div>
            <div className="half view inactive">View</div>
        </div>
    }
}