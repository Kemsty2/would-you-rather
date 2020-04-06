import React, { Component } from "react";
import QuestionUser from "./QuestionUser";
import OptionsContainer from "./OptionsContainer";
import { connect } from "react-redux";
import { getQuestion } from "../../Redux/Actions/questions";
import LoaderForm from "../../Components/LoaderForm";

class QuestionsAnswered extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getQuestion(id);
  }

  render() {
    const { question } = this.props;
    return (
      <div className="container" style={{marginBottom: "3rem", minHeight: "calc(100vh - 20vh)"}}>
        {this.props.status === "pending" ? <LoaderForm /> : null}
        <div id="form_container">
          <div className="row no-gutters">
            <QuestionUser author={question.author}/>            
            <OptionsContainer answer={true} {...this.props}/>
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
    message: sm.message,
    status: sm.status,
    info: su.info,
    question: sq.question
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getQuestion: idQuestion => dispatch(getQuestion(idQuestion)),  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsAnswered);