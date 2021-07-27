import MESSAGE_TYPES from "./types";

export const setMessage = (message, type) => (dispatch) => {
  dispatch({
    type: MESSAGE_TYPES.SET_MESSAGE,
    payload: { message, type },
  });
  setTimeout(() => {
    dispatch({
      type: MESSAGE_TYPES.RESET_MESSAGE,
    });
  }, 5000);
};
