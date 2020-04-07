import React, { Component } from "react";
import { Progress, Input, Label, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { getResult, isEmpty } from "../../utils";
class OptionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionSelected: "optionOne"
    };
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({ optionSelected: value });
  };

  onSubmitAnswer = () => {
    const { id } = this.props.question;
    const { optionSelected } = this.state;

    this.props.submitAnswer(id, optionSelected);

    this.props.history.push(`/questions/${id}/result`);
  };

  render() {
    const { optionSelected } = this.state;
    const { question, answer } = this.props;

    let resultOptionOne = {},
      resultOptionTwo = {}, userAnswer = "";
    if (answer) {
      if (!isEmpty(question)) {
        resultOptionOne = getResult(question, "optionOne");
        resultOptionTwo = getResult(question, "optionTwo");
        if (question.optionOne.votes.indexOf(this.props.info.id) !== -1) {
          userAnswer = "optionOne"
        } else if (this.props.question.optionTwo.votes.indexOf(this.props.info.id) !== -1) {
          userAnswer = "optionTwo"
        }
      }            
    }
    return (
      <div className="col-lg-8">
        <div id="wizard_container" className="wizard">
          <div id="top-wizard">
            {answer ? (
              <Link
                to={`/questions/${question.id}`}
                className="animated_link cursor-pointer"
              >
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
                <div>
                  {answer ? (
                    <>
                      <div
                        className="container_radio version_2"
                        style={{ paddingBottom: "23px" }}
                      >
                        <div className="text-center mb-1">
                          <span className="mr-2">
                            Percentage Of Vote : {resultOptionOne.percentage}%
                          </span>
                          <span>
                            Numbers Of Vote : {resultOptionOne.numVotes}
                          </span>
                        </div>
                        <Progress value={resultOptionOne.percentage}>
                          {question.optionOne ? question.optionOne.text : ""}
                        </Progress>

                        <Input
                          type="radio"
                          name={question.id}
                          className="required"
                          value="optionOne"
                          checked={userAnswer === "optionOne"}
                          onChange={() => {}}
                        />
                        <span
                          className="checkmark"
                          style={{ marginTop: "1.2rem" }}
                        ></span>
                      </div>
                      <div
                        className="container_radio version_2"
                        style={{ paddingBottom: "23px" }}
                      >
                        <div className="text-center mb-1">
                          <span className="mr-2">
                            Percentage Of Vote : {resultOptionTwo.percentage}%
                          </span>
                          <span>
                            Numbers Of Vote : {resultOptionTwo.numVotes}
                          </span>
                        </div>
                        <Progress value={resultOptionTwo.percentage}>
                          {question.optionTwo ? question.optionTwo.text : ""}
                        </Progress>

                        <Input
                          type="radio"
                          name={question.id}
                          className="required"
                          value="optionTwo"
                          checked={userAnswer === "optionTwo"}
                          onChange={() => {}}
                        />
                        <span
                          className="checkmark"
                          style={{ marginTop: "1.2rem" }}
                        ></span>
                      </div>{" "}
                    </>
                  ) : (
                    <>
                      <FormGroup check>
                        <Label className="container_radio version_2" check>
                          <Input
                            type="radio"
                            name={question.id}
                            className="required"
                            value="optionOne"
                            checked={optionSelected === "optionOne"}
                            onChange={this.onChange}
                          />
                          {question.optionOne ? question.optionOne.text : ""}
                          <span className="checkmark"></span>
                        </Label>
                      </FormGroup>

                      <FormGroup check>
                        <Label className="container_radio version_2" check>
                          <Input
                            type="radio"
                            name={question.id}
                            className="required"
                            value="optionTwo"
                            checked={optionSelected === "optionTwo"}
                            onChange={this.onChange}
                          />
                          {question.optionTwo ? question.optionTwo.text : ""}
                          <span className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div id="bottom-wizard">
              {this.props.answer ? null : (
                <>
                  {/* <button
                    type="button"
                    name="backward"
                    className="backward mr-1"
                    onClick={this.onClickAnswerBtn}
                  >
                    Answer
                  </button> */}
                  <button
                    type="button"
                    name="forward"
                    className="forward"
                    onClick={this.onSubmitAnswer}
                  >
                    Submit Answer
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
