import React, { Component } from "react";
import Pool from "./Pool";

class PoolsList extends Component {
  render() {
    return (
      <div className="row">
        <Pool />
        <Pool />
        <Pool />
        <Pool />
        <Pool />
        <Pool />
      </div>
    );
  }
}

export default PoolsList;
