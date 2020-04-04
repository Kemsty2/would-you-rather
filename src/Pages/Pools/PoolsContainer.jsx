import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import PoolsList from "./PoolsList";
class PoolsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poolType: 1
    };
  }

  onBtnPoolChangeClick = poolType => {
    this.setState({
      poolType
    });
  };

  render() {
    const { poolType } = this.state;

    return (
      <div className="container margin_60_35">
        <div className="main_title_2">
          <ButtonGroup>
            <Button              
              onClick={() => this.onBtnPoolChangeClick(1)}
              active={poolType === 1}
              className="btn-pool-choice"
            >
              {" "}
              Answered
            </Button>
            <Button              
              onClick={() => this.onBtnPoolChangeClick(2)}
              active={poolType === 2}
              className="btn-pool-choice"
            >
              {" "}
              UnAnswered
            </Button>
          </ButtonGroup>
          <h2>Some Pools Questions</h2>
          <p>Select Your Pool Question</p>
        </div>
        <PoolsList/>
      </div>
    );
  }
}

export default PoolsContainer;
