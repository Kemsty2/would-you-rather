import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, '\\$&');

  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
class UnauthenticatedRouteContainer extends Component {  

  render() {
    let {
      component: C,
      isAuthenticated,
      props: cProps,      
      ...rest
    } = this.props;
    const redirect = querystring('redirect');
    return (
      <Route
        {...rest}
        render={props =>
          !isAuthenticated ? (
            <C {...props} {...cProps} />
          ) : (
            <Redirect
              to={redirect === '' || redirect === null ? '/' : redirect}
            />
          )
        }
      />
    );
  }
}

const UnauthenticatedRoute = connect(
  state => ({
    isAuthenticated: state.user.isAuthenticated
  }), 
)(UnauthenticatedRouteContainer);

export default UnauthenticatedRoute;
