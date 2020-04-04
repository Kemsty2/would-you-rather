import React, { Component } from "react";
import QuestionUser from "./QuestionUser";
import OptionsContainer from "./OptionsContainer";

class QuestionsAnswered extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container" style={{marginBottom: "3rem"}}>
        <div id="form_container">
          <div className="row no-gutters">
            <QuestionUser />            
            <OptionsContainer answer={true} {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsAnswered;
