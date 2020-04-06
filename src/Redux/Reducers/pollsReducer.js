import { POLLS_LIST, UPDATE_POLLS_LIST } from "../Actions";

const initialState = {
  listOfPolls: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case POLLS_LIST: {
      return {
        ...state,
        listOfPolls: { ...action.polls }
      };
    }

    case UPDATE_POLLS_LIST:
      return {
        ...state,
        listOfPolls: Object.assign({}, state.listOfPolls, {
          [action.question.id]: { ...action.question }
        })
      };

    default:
      return state;
  }
};
