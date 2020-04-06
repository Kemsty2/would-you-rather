import React, { Component } from "react";

class Option extends Component {
  constructor(props){
    super(props);

    this.state = {
      optionSelected: "optionOne"
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log("update before control");
    if(this.props.optionSelected !== prevProps.optionSelected){
      console.log("update after control");
      const {optionSelected} = this.props;
      this.setState({
        optionSelected
      })
      this.forceUpdate();
    }
  }

  onChange = (e) => {    
    e.preventDefault();

    const value = e.target.value;        
    this.props.onOptionChange(value);
    
  }

  render() {
    const {optionSelected} = this.state;
    const {option, label, id} = this.props;
    return (
      <label className="container_radio version_2">        
        <input
          type="radio"
          name={id}
          value={option}          
          className="required"
          checked={optionSelected === option}          
          onChange={this.onChange}
        />
        {label}
        <span className="checkmark"></span>
      </label>
    );
  }
}

export default Option;
