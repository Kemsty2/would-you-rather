import { POLLS_LIST, PENDING, SUCCESS, FAIL, ADD_POLL, UPDATE_USER } from ".";
import { _getQuestions, _saveQuestion } from "../../api";

export function listPolls() {
  return (dispatch, getState) => {
    dispatch({
      type: PENDING,
    });
    return _getQuestions()
      .then((polls) => {
        dispatch({
          type: POLLS_LIST,
          polls,
        });
        dispatch({
          type: SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: FAIL,
          message: "An error occured",
        });
      });
  };
}

export function savePoll(payload) {
  return (dispatch, getState) => {
    dispatch({
      type: PENDING,
    });
    const user = getState().user.info;    

    return _saveQuestion({
      optionOneText: payload.optionOne,
      optionTwoText: payload.optionTwo,
      author: user.id,
    })
      .then((poll) => {
        const info = {
          ...user,
          questions: user.questions.concat([poll.id])
        }

        dispatch({
          type: ADD_POLL,
          poll,
        });

        dispatch({
          type: UPDATE_USER,
          info
        });

        dispatch({
          type: SUCCESS,
          message: "Poll enregistré avec succès"
        });
      })
      .catch((err) => {
        dispatch({
          type: FAIL,
          message: `An error occured ::: ${err.message}`,
        });
      });
  };
}
