import { POLLS_LIST, PENDING, SUCCESS, FAIL } from ".";
import { _getQuestions } from "../../api";

export function listPolls() {
  return (dispatch, getState) => {
    dispatch({
      type: PENDING
    });
    return _getQuestions()
      .then(polls => {
        dispatch({
          type: POLLS_LIST,
          polls
        });
        dispatch({
          type: SUCCESS
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: FAIL,
          message: "An error occured"
        });
      });
  };
}
