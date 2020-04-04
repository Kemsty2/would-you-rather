import React, { Component } from "react";
import Header from "./Header";
import Routes from "../Routes/MainRoutes";
import Footer from "./Footer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Main extends Component {  
  render() {
    return (
      <>
        <Header {...this.props}/>
        <main id="general_page">
          <Routes/>
        </main>
        <Footer/>
      </>
    );
  }
}
export default withRouter(connect(
  state => ({    
    isAuthenticated: state.user.isAuthenticated
  })
)(Main));
