import React, { Component } from "react";
import Option from "../../Components/Option";
import OptionAnswered from "../../Components/OptionAnswered";

class QuestionsList extends Component {
  render() {
    return (
      <div className="form-group">
        {this.props.answer ? (
          <>
            <OptionAnswered label="Yes" />
            <OptionAnswered label="No" />
          </>
        ) : (
          <>
            <Option label="Yes" id="question_id" />
            <Option label="No" id="question_id" />
          </>
        )}
      </div>
    );
  }
}

export default QuestionsList;
