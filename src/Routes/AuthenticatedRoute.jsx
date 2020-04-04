import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRouteContainer extends Component {
  render() {
    const {
      isAuthenticated,
      component: C,
      props: cProps,
      ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <C {...props} {...cProps} />
          ) : (
            <Redirect to={`/login?redirect=${props.location.pathname}`} />
          )
        }
      />
    );
  }
}

const PrivateRoute = connect(state => ({
  isAuthenticated: state.user.isAuthenticated
}))(PrivateRouteContainer);

export default PrivateRoute;
