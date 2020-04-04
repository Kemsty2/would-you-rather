import { SUCCESS, FAIL, PENDING, RESET_MESSAGE } from "../Actions";
import { toast } from "react-toastify";

const initialState = {
  message: "",
  status: "",
  type: ""
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS:
      if (action.message) toast.info(action.message);
      return {
        ...state,
        status: "success",
        message: action.message,
        messagetype: action.messagetype ? action.messagetype : ""
      };

    case FAIL:
      if (action.message && !action.messagetype) toast.error(action.message);
      return {
        ...state,
        status: "fail",
        messagetype: action.messagetype ? action.messagetype : "",
        message: action.message
      };

    case PENDING:
      return {
        ...state,
        status: "pending",
        message: action.message
      };

    case RESET_MESSAGE:
      return {
        ...state,
        status: "",
        message: ""
      };

    default:
      return state;
  }
};
