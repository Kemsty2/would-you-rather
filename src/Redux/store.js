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

export const loadState = () => {
  // We need the try block because user may not permit our accessing localStorage.
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) { // The key 'state' does not exist.
      return undefined;             // Let our reducer initialize the app.
    }

    return JSON.parse(serializedState)

  } catch (error) {
    console.log(error)
    return undefined // Let our reducer initialize the app.
  }
};

export const saveState = (state) => {
  try {
    // Serialize the state. Redux store is recommended to be serializable.
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)

  } catch (error) {
    console.log(error)
  }
};