import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import user from "./Reducers/userReducer";
import message from "./Reducers/messageReducer";
import polls from "./Reducers/pollsReducer";
import question from "./Reducers/questionReducer";

export default function configureStore(history, initialState) {
  const reducers = {
    user,
    message,
    polls,
    question
  };

  const middleware = [thunk, routerMiddleware(history)];

  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === "development";

  if (
    isDevelopment &&
    typeof window !== "undefined" &&
    window.devToolsExtension
  ) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );

  //  TODO: Serialize Store
}
