import AUTH_TYPES from "./types";

const initial_state = {
  user: null,
  token: null,
  isAuth: false,
  authLoading: false,
};

const authReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case AUTH_TYPES.LOADING:
      return {
        ...state,
        authLoading: !state.authLoading,
      };
    case AUTH_TYPES.LOGIN_USER:
      return {
        ...state,
        token: payload,
      };
    case AUTH_TYPES.SET_AUTH_USER:
      return {
        ...state,
        isAuth: true,
        user: payload,
      };
    case AUTH_TYPES.LOGOUT_USER:
      return {
        ...state,
        user: null,
        token: null,
        isAuth: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
