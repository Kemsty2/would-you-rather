import { USER_LOGOUT, USER_LOGIN } from "../Actions";

//  Import Action Api

const initialState = {
  info: {},
  isAuthenticated: true
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
        info: action.user
      };
    }

    case USER_LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        info: {}
      }
    }

    default:
      return state;
  }
};
