import {
  SET_QUESTION,
  SAVE_QUESTION,
  PENDING,
  SUCCESS,
  FAIL
} from ".";
import { _getQuestion, _saveQuestionAnswer } from "../../api";

export function getQuestion(qid) {
  return (dispatch, getState) => {
    try {
      dispatch({
        type: PENDING
      });
      return _getQuestion(qid).then(question => {
        dispatch({
          type: SET_QUESTION,
          question: { ...question }
        });
        dispatch({
          type: SUCCESS
        });
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL,
        message: "An error occured"
      });
    }
  };
}

export function submitAnswer(qid, answer) {
  return (dispatch, getState) => {
    dispatch({
      type: PENDING
    });
    console.log(getState());

    const authedUser = getState().user.info.id;

    _saveQuestionAnswer({authedUser, qid, answer})
      .then(question => {
        dispatch({
          type: SAVE_QUESTION,
          question
        });

        /* dispatch({
          type: UPDATE_POLLS_LIST,
          question
        }); */

        dispatch({
          type: SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: SUCCESS,
          message: err.message
        });
      });
  };
}
