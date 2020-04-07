import { SET_QUESTION, SAVE_QUESTION, UNSET_QUESTION } from "../Actions";

//  Import Action Api

const initialState = {
  question: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_QUESTION: {
      return {
        ...state,
        question: { ...action.question }
      };
    }

    case SAVE_QUESTION: {
      return {
        ...state,
        question: {...action.question}
      }
    }

    case UNSET_QUESTION: {
      return {
        ...state,
        question: {}
      }
    }

    default:
      return state;
  }
};
