import { POLLS_LIST } from "../Actions";

//  Import Action Api

const initialState = {  
  listOfPolls: {}
};

export default (state = initialState, action = {}) => {  
  switch (action.type) {
    case POLLS_LIST: {
      return {
        ...state,
        listOfPolls: {...action.polls}        
      };
    }    

    default:
      return state;
  }
};
