import React from "react";
import Loadable from "react-loadable";
import Loader from "../Components/Loader";
import AuthenticatedRoute from "./AuthenticatedRoute";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PoolsRoute = Loadable({
  loader: () => import("../Pages/Pools/PoolsContainer"),
  loading: Loader
});

const AddPoolRoute = Loadable({
  loader: () => import("../Pages/Pools/AddPool"),
  loading: Loader
});

const QuestionsRoute = Loadable({
  loader: () => import("../Pages/Questions/QuestionsUnAnswered"),
  loading: Loader
});

const QuestionsAnswerRoute = Loadable({
  loader: () => import("../Pages/Questions/QuestionsAnswered"),
  loading: Loader
});

const LeaderBoardRoute = Loadable({
  loader: () => import("../Pages/LeaderBoard/LeaderBoardContainer"),
  loading: Loader
});

const NotFoundRoute = Loadable({
  loader: () => import("../Pages/NotFound"),
  loading: Loader
});


export const Routes = ({ childProps, location }) => {
  return (
    <Switch>
      <AuthenticatedRoute
        path="/"
        exact
        component={PoolsRoute}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/add"
        exact
        component={AddPoolRoute}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/questions/:id"
        exact
        component={QuestionsRoute}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/questions/:id/result"
        exact
        component={QuestionsAnswerRoute}
        props={childProps}
      />   
      <AuthenticatedRoute
        path="/leaderboard"
        exact
        component={LeaderBoardRoute}
        props={childProps}
      />     
      <Route component={NotFoundRoute} path="/notfound" />
      <Redirect to="/notfound" />
    </Switch>
  );
};

export default withRouter(
  connect(
    state => ({
      location: state.routerReducer.location
    })
  )(Routes)
);