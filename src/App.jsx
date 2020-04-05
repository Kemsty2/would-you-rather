import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import configureStore from "./Redux/store";
import UnAuthenticatedRoute from "./Routes/UnAuthenticatedRoute";
import Loadable from "react-loadable";
import Loader from "./Components/Loader";
import {toast} from "react-toastify";

import "./assets/css/bootstrap.css";
import "./assets/css/menu.css";
import "./assets/css/vendors.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/table.css";
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure({
  autoClose: 4000,
  draggable: false
});

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const history = createBrowserHistory({ basename: baseUrl });

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const LoginRoute = Loadable({
  loader: () => import("./Pages/Login/Login"),
  loading: Loader
});

const MainRoute = Loadable({
  loader: () => import("./Layout/Main"),
  loading: Loader
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <UnAuthenticatedRoute path="/login" exact component={LoginRoute} />
            <Route path="/" component={MainRoute} />            
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
