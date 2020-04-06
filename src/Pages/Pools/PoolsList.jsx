import React, { Component } from "react";
import Pool from "./Pool";
import PropTypes from "prop-types";

class PoolsList extends Component {
  render() {
    const {polls, pollType} = this.props;

    return (
      <div className="row">
        {polls.map(poll => {
          return(
            <Pool key={poll.id} poll={poll} pollType={pollType}/>
          )
        })}                
      </div>
    );
  }
}

export default PoolsList;

PoolsList.propTypes = {
  polls: PropTypes.array
}