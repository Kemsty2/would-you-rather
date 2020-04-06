import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionUser extends Component {
  render() {
    const { user, question } = this.props;
    return (
      <div className="col-lg-4">
        <div id="left_form">
          <h3>Created By</h3>
          <figure>
            <img src={user.avatarURL} alt="" width="100" height="100" />
            <p>
              {user.name}{" "}
              <span>
                Created {new Date(question.timestamp).toLocaleDateString()}
              </span>
            </p>
          </figure>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const su = state.user,
    sq = state.question;
        

  return {
    user: {...su.listOfUsers[sq.question.author]},
    question: sq.question
  };
};

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionUser);
