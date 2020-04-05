import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Poll extends Component {
  render() {
    const {poll, listOfUsers} = this.props;
    const author = listOfUsers[poll.author]
    return (
      <div className="col-lg-4 col-md-6">
        <Link to={`questions/${poll.id}`} className="box_topic">
        <span>
            {/* <img src="" width="70" height="70" alt="" /> */}
            <img src="https://img.icons8.com/windows/96/000000/poll-vertical.png" alt=""/>
          </span>
          <h3> By {author.name}</h3>
          <p>          
          <img src={author.avatarURL} className="user_avatar mr-2" alt="avatar"/>
          <em> At {new Date(poll.timestamp).toLocaleDateString()}</em>            
          </p>
        </Link>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const su = state.user;

  return {
    listOfUsers: su.listOfUsers
  }
}

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
