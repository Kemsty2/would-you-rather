import React, { Component } from "react";
import QuestionUser from "./QuestionUser";
import OptionsContainer from "./OptionsContainer";

class QuestionsUnAnswered extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <div id="form_container">
          <div className="row no-gutters">
            <QuestionUser/>
            <OptionsContainer answer={false} {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsUnAnswered;
