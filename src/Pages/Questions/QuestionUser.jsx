import React, { Component } from "react";
import user from "../../assets/img/default-user.jpg";

class QuestionUser extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div id="left_form">
          <h3>Created By</h3>
          <figure>
            <img src={user} alt="" width="100" height="100" />
            <p>
              UserName <span>Created At 22/04/2020</span>
            </p>
          </figure>
        </div>
      </div>
    );
  }
}

export default QuestionUser;
