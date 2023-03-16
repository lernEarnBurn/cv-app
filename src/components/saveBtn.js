import React from "react";
import '../css/saveBtn.css'

export class Save extends React.Component {
    constructor(props){
        super(props)
        this.saveData = this.saveData.bind(this)
        this.editData = this.editData.bind(this)
        this.state = { isSaved : false }
    }

    saveData(){
        this.setState({isSaved : true})
    }

    editData(){
        this.setState({isSaved : false})
    }

    render(){
        return <div>{(!this.state.isSaved) ? <button onClick={this.saveData}>Save</button> : <button onClick={this.editData}>Edit</button>}</div>
    }
}