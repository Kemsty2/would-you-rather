import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import configureStore, { saveState, loadState } from "./Redux/store";
import UnAuthenticatedRoute from "./Routes/UnAuthenticatedRoute";
import Loadable from "react-loadable";
import Loader from "./Components/Loader";
import { toast } from "react-toastify";
import throttle from "lodash/throttle";

import "./assets/css/bootstrap.css";
import "./assets/css/menu.css";
import "./assets/css/vendors.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/table.css";
import "react-toastify/dist/ReactToastify.min.css";

toast.configure({
  autoClose: 4000,
  draggable: false,
});

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const history = createBrowserHistory({ basename: baseUrl });

//  Load Serialize State
const persistedState = loadState();
const initialState = Object.assign({}, window.initialReduxState, {
  ...persistedState,
});
const store = configureStore(history, initialState);

// On any state change, save the state to localStorage.
// Prevent the saveState function from being called too many times in case that
// state updates vary fast.
store.subscribe(
  throttle(() => {
    // console.debug('saveState')
    const { user } = store.getState();
    saveState({
      user
    });
  }, 1000)
); // At most once this length of time.

const LoginRoute = Loadable({
  loader: () => import("./Pages/Login/Login"),
  loading: Loader,
});

const MainRoute = Loadable({
  loader: () => import("./Layout/Main"),
  loading: Loader,
});

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
