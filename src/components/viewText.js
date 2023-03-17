import React from "react";

export class ViewText extends React.Component {
    

    render(){
        return  <div>
                    <p>{this.props.value}</p>
                </div>
    }
}