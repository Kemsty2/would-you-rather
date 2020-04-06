import React, { Component } from "react";
import Option from "../../Components/Option";
import OptionAnswered from "../../Components/OptionAnswered";

class QuestionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { options, question } = this.props;
    return (
      <div className="form-group">
        {this.props.answer
          ? Object.keys(options).map((key, idx) => {
              return (
                <OptionAnswered
                  label={options[key].text}
                  id={question.id}
                  key={key}
                />
              );
            })
          : Object.keys(options).map((key, idx) => {
              return (
                <Option
                  label={options[key].text}
                  id={question.id}
                  key={key}
                  option={key}
                  onOptionChange={this.props.onOptionChange} 
                  optionSelected={this.props.optionSelected}                 
                />
              );
            })}
      </div>
    );
  }
}

export default QuestionsList;
