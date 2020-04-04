import { USER_LOGIN, USER_LOGOUT, LIST_USERS, PENDING, SUCCESS, FAIL } from ".";
import { _getUsers, _getUser } from "../../api";

export function userLogin(idUser) {
  return (dispatch, getState) => {
    dispatch({
      type: PENDING
    });
    return _getUser(idUser).then(user => {
      console.log({ user, idUser });
      dispatch({
        type: USER_LOGIN,
        user
      });

      dispatch({
        type: SUCCESS,
        message: "Login Successfully"
      });
    });
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT
  };
}

export function listUsers() {
  return (dispatch, getState) => {
    dispatch({
      type: PENDING
    });
    return _getUsers()
      .then(users => {
        dispatch({
          type: LIST_USERS,
          users
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
