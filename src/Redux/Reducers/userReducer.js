import { USER_LOGOUT, USER_LOGIN, LIST_USERS } from "../Actions";

//  Import Action Api

const initialState = {
  info: {},
  isAuthenticated: false,
  listOfUsers: {}
};

export default (state = initialState, action = {}) => {  
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
        info: {...action.user}
      };
    }

    case USER_LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        info: {}
      }
    }

    case LIST_USERS: {
      return {
        ...state,
        listOfUsers: {...action.users}
      }
    }

    default:
      return state;
  }
};
