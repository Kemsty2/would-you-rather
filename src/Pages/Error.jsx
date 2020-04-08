import React, { Component } from "react";

class ErrorPage extends Component {
  render() {
    return (
      <div
        className="container margin_60_35"
        style={{ minHeight: "calc(100vh - 155px)" }}
      >
        <div className="main_title_2" style={{ marginTop: "7rem" }}>
          <h2>500 Internal Error .... Please Refresh The Page</h2>
          <button
            className="btn btn-pool-choice active"
            onClick={() => {
              window.location.reload(true);
            }}
          >
            <i className="arrow_left"></i> Back Home Page
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
