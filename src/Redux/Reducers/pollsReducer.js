import { POLLS_LIST, UPDATE_POLLS_LIST, ADD_POLL } from "../Actions";

const initialState = {
  listOfPolls: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case POLLS_LIST: {
      return {
        ...state,
        listOfPolls: { ...action.polls },
      };
    }

    case UPDATE_POLLS_LIST:
      return {
        ...state,
        listOfPolls: Object.assign({}, state.listOfPolls, {
          [action.question.id]: { ...action.question },
        }),
      };

    case ADD_POLL:
      const { poll } = action;

      const listOfPolls  = {
        ...state.listOfPolls,
        [poll.id]: poll
      };

      return {
        ...state,
        listOfPolls
      };

    default:
      return state;
  }
};
