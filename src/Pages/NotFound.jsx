import React, { Component } from "react";
import {Link} from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="container margin_60_35" style={{minHeight: "calc(100vh - 155px)"}}>
        <div className="main_title_2" style={{marginTop: "7rem"}}>          
          <h2>404 Error.... Page Not Found</h2>
          <p>Click On The Buttom to Go to the Home Page</p>
          <Link to="/" className="btn btn-pool-choice active"><i className="arrow_left"></i> Back Home Page</Link>
        </div>        
      </div>
    );
  }
}

export default NotFound;
