import React, { Component } from "react";
import { connect } from "react-redux";
import LoaderForm from "../../Components/LoaderForm";
import { isEmpty } from "../../utils";
class LeaderBoardContainer extends Component {
  render() {
    const { listOfUsers } = this.props;
    return (
      <div className="container mt-3 min-h-100">
        {this.props.status === "pending" ? <LoaderForm /> : null}
        <div className="main_title_2">
          <h2>LeaderBoard</h2>
        </div>
        <div className="wrap-table100">
          <div className="table100 ver1 m-b-110">
            <div className="table100-head">
              <table>
                <thead>
                  <tr className="row100 head">
                    <th className="cell100 column1">User</th>
                    <th className="cell100 column2">Number of Questions</th>
                    <th className="cell100 column3">Number of Answers</th>
                    {/* <th className="cell100 column4">Trainer</th>
                    <th className="cell100 column5">Spots</th> */}
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table100-body">
              <table>
                <tbody>
                  {Object.keys(listOfUsers).map((key) => {
                    return <LeaderRow key={key} user={listOfUsers[key]} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class LeaderRow extends Component {
  render() {
    const { user } = this.props;
    let numQuestions = 0;
    let numAnswers = 0;
    if (!isEmpty(user)) {
      numQuestions = user.questions.length;
      numAnswers = Object.keys(user.answers).length;
    }
    return (
      <tr className="row100 body">
        <td className="cell100 column1">
          <img src={user.avatarURL} className="avatar mr-2" alt="avatar" />{" "}
          {user.name}
        </td>
        <td className="cell100 column2">{numQuestions}</td>
        <td className="cell100 column3">{numAnswers}</td>
        {/* <td className="cell100 column4"></td>
        <td className="cell100 column5"></td> */}
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  const sm = state.message,
    su = state.user;
  return {
    message: sm.message,
    status: sm.status,
    listOfUsers: su.listOfUsers,
  };
};

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoardContainer);
