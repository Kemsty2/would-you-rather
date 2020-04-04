import React, { Component } from "react";
import {Progress} from "reactstrap";
class OptionAnswered extends Component {
  render() {
    return (
      <div className="container_radio version_2" style={{paddingBottom: "23px"}}>
        <div className="text-center mb-1">
          <span className="mr-2">Pourcentage : 50%</span>
          <span>Nombre : 2</span>
        </div>
        <Progress value={50} >{this.props.label}</Progress>      
        <input
          type="radio"
          name={this.props.label}
          checked          
          className="required"
        />
        <span className="checkmark" style={{marginTop: "1.2rem"}}></span>
      </div>    
    );
  }
}

export default OptionAnswered;
