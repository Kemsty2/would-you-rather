import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from "../../logo.svg"
class Pool extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <Link to="questions/1" className="box_topic">
        <span>
            {/* <img src="" width="70" height="70" alt="" /> */}
            <img src="https://img.icons8.com/windows/96/000000/poll-vertical.png" alt=""/>
          </span>
          <h3> Pool Name </h3>
          <p>          
          <img src={logo} className="user_avatar mr-2" alt="avatar"/>
          <em> Kemsty</em>            
          </p>
        </Link>        
      </div>
    );
  }
}

export default Pool;
