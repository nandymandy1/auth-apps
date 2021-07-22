import authActions from "./types";

const initialState = {
  user: null,
  token: null,
  isAuth: false,
  isLoading: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActions.AUTH_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case authActions.AUTHENTICATE:
      return {
        ...state,
        isAuth: true,
        token: payload.token,
      };
    case authActions.LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        token: null,
        user: null,
      };
    case authActions.GET_AUTH_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
