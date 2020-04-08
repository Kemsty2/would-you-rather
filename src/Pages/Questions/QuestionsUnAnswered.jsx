import React, { Component } from "react";
import QuestionUser from "./QuestionUser";
import OptionsContainer from "./OptionsContainer";
import { connect } from "react-redux";
import { getQuestion, submitAnswer, clearQuestion } from "../../Redux/Actions/questions";
import LoaderForm from "../../Components/LoaderForm";
import { isEmpty, isAnswerPoll } from "../../utils";
import {Redirect} from "react-router-dom";

class QuestionsUnAnswered extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: null
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.getQuestion(id);
    const {question, info} = this.props;    
    
    console.log("question", question);

    if(!isEmpty(question)){
      if(!isEmpty(info)){
        if (isAnswerPoll(question, info.id)) {          
          this.props.history.push(`/questions/${question.id}/result`);
        }
      }
    }else{
      this.setState({
        redirectTo: {
          pathname: "/notfound",
          state: {text: "Poll Not Found"}
        }
      })
    }
  }  

  componentWillUnmount(){
    this.props.clearQuestion();
  }

  render() {
    const { question } = this.props;
    const {redirectTo} = this.state;

    if (redirectTo !== null) {
      return <Redirect to={{...redirectTo}} />
    }
    return (
      <div className="container" style={{ minHeight: "calc(100vh - 20vh)" }}>
        {this.props.status === "pending" ? <LoaderForm /> : null}
        <div id="form_container">
          <div className="row no-gutters">
            <QuestionUser author={question.author} />
            <OptionsContainer answer={false} {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const sm = state.message,
    su = state.user,
    sq = state.question;

  return {
    status: sm.status,
    info: su.info,
    question: sq.question
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getQuestion: idQuestion => dispatch(getQuestion(idQuestion)),
  submitAnswer: (qid, answer) => dispatch(submitAnswer(qid, answer)),
  clearQuestion: () => dispatch(clearQuestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsUnAnswered);
