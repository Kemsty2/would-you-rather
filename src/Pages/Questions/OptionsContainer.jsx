import React, { Component } from "react";
import QuestionsList from "./QuestionsList";
import { Link } from "react-router-dom";

class OptionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onClickAnswerBtn = () => {
    this.props.history.push("/questions/1/result");
  };

  render() {
    return (
      <div className="col-lg-8">
        <div id="wizard_container" className="wizard">
          <div id="top-wizard">
            {this.props.answer ? (
              <Link to="/questions/1" className="animated_link cursor-pointer">
                <span id="location">
                  <i className="arrow_left"></i> Back to Pool
                </span>
              </Link>
            ) : null}
          </div>
          <div id="wrapped" className="fl-form fl-style-1 wizard-form">
            <div id="middle-wizard" className="wizard-branch wizard-wrapper">
              <div className="step wizard-step current">
                <h3 className="main_question">
                  <i className="arrow_right"></i>
                  Would You Rather ?
                </h3>
                <QuestionsList answer={this.props.answer} />
              </div>
            </div>
            <div id="bottom-wizard">
              {this.props.answer ? null : (
                <>
                  <button
                    type="button"
                    name="backward"
                    className="backward mr-1"
                    onClick={this.onClickAnswerBtn}
                  >
                    Answer
                  </button>
                  <button type="button" name="forward" className="forward">
                    Submit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OptionsContainer;
