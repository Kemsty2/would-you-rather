import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import PoolsList from "./PoolsList";
import { connect } from "react-redux";
import { listPolls } from "../../Redux/Actions/polls";
import LoaderForm from "../../Components/LoaderForm";
import { isAnswerPoll } from "../../utils.js";

class PoolsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pollType: 2
    };
  }

  componentDidMount() {
    this.props.listPolls();
  }

  onBtnPoolChangeClick = pollType => {
    this.setState({
      pollType
    });
  };

  render() {
    const { pollType } = this.state;
    const { listOfPolls, info } = this.props;
    const polls = Object.values(listOfPolls).filter(poll => {
      const isAnswer = isAnswerPoll(poll, info.id);

      return pollType === 1 ? isAnswer : !isAnswer;
    });    

    return (
      <div
        className="container margin_60_35"
        style={{ minHeight: "calc(100vh - 20vh)" }}
      >
        {this.props.status === "pending" ? <LoaderForm /> : null}
        <div className="main_title_2">
          <ButtonGroup>
            <Button
              onClick={() => this.onBtnPoolChangeClick(2)}
              active={pollType === 2}
              className="btn-pool-choice"
            >
              {" "}
              UnAnswered
            </Button>
            <Button
              onClick={() => this.onBtnPoolChangeClick(1)}
              active={pollType === 1}
              className="btn-pool-choice"
            >
              {" "}
              Answered
            </Button>
          </ButtonGroup>
          <h2>Some Pools Questions</h2>
          <p>Select Your Pool Question</p>
        </div>
        <PoolsList polls={polls} pollType={pollType} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const sp = state.polls,
    sm = state.message,
    su = state.user;

  return {
    message: sm.message,
    status: sm.status,
    listOfPolls: sp.listOfPolls,
    info: su.info
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  listPolls: () => dispatch(listPolls())
});

export default connect(mapStateToProps, mapDispatchToProps)(PoolsContainer);
