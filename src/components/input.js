import React from "react";
import '../css/input.css'

export class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {text : ''}
        this.sendUpToParent = this.sendUpToParent.bind(this)
        this.inputRef = React.createRef();
    }

    sendUpToParent(){
        this.setState({text : document.querySelector('.input').value})
        const { updateParentsText, id } = this.props
        updateParentsText(this.inputRef.current.value, id)
    }

    render(){
        return  <div className="input-container">
                    <input ref={this.inputRef} className="input" type={this.props.type} placeholder={this.props.name} onChange={this.sendUpToParent}></input>
                </div>
    }
}