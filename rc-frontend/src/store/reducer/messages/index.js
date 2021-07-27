import MESSAGE_TYPES from "./types";

const initial_state = {
  message: null,
  type: null,
};

const messageReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case MESSAGE_TYPES.SET_MESSAGE:
      return {
        ...state,
        ...payload,
      };
    case MESSAGE_TYPES.RESET_MESSAGE:
      return {
        type: null,
        message: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default messageReducer;
