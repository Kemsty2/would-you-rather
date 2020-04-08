import React, { Component } from "react";
import Pool from "./Pool";
import PropTypes from "prop-types";
import lodash from "lodash";

class PoolsList extends Component {
  render() {
    const { polls, pollType } = this.props;
    const orderPolls = lodash.orderBy(polls, ["timestamp"], ["desc"]);
    return (
      <div className="row">
        {orderPolls.map((poll) => {
          return <Pool key={poll.id} poll={poll} pollType={pollType} />;
        })}
      </div>
    );
  }
}

export default PoolsList;

PoolsList.propTypes = {
  polls: PropTypes.array,
};
