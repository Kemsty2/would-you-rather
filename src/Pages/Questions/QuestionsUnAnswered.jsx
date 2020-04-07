import React, { Component } from "react";
import QuestionUser from "./QuestionUser";
import OptionsContainer from "./OptionsContainer";
import { connect } from "react-redux";
import { getQuestion, submitAnswer, clearQuestion } from "../../Redux/Actions/questions";
import LoaderForm from "../../Components/LoaderForm";
import { isEmpty, isAnswerPoll } from "../../utils";

class QuestionsUnAnswered extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.getQuestion(id);
    const {question, info} = this.props;    
    
    if(!isEmpty(question)){
      if(!isEmpty(info)){
        if (isAnswerPoll(question, info.id)) {          
          this.props.history.push(`/questions/${question.id}/result`);
        }
      }
    }
  }  

  componentWillUnmount(){
    this.props.clearQuestion();
  }

  render() {
    const { question } = this.props;
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
