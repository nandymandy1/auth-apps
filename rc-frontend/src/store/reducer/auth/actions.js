import AUTH_TYPES from "./types";
import { setMessage } from "../messages/actions";
import { api, setToken } from "../../../services";
import { messageSerializer } from "../messages/utils";

export const registerUser = (user) => async (dispatch) => {
  dispatch(setAuthLoading());
  try {
    let { data } = await api.post("/users/register", user);
    setToken(data.token);
    localStorage.setItem("token", data.token);
    dispatch({
      payload: data.token,
      type: AUTH_TYPES.LOGIN_USER,
    });
    dispatch(setMessage(messageSerializer(data), "success"));
    dispatch(getAuthUser());
  } catch (err) {
    console.log("RE", err.response.data);
    dispatch(setMessage(messageSerializer(err.response.data), "danger"));
  } finally {
    dispatch(setAuthLoading());
  }
};

export const initApp = () => async (dispatch) => {
  dispatch(setAuthLoading());
  try {
    let token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    setToken(token);
    dispatch({
      payload: token,
      type: AUTH_TYPES.LOGIN_USER,
    });
    dispatch(getAuthUser());
  } catch (err) {
    console.log("INIT_ACTION", err.message);
  } finally {
    dispatch(setAuthLoading());
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch(setAuthLoading());
  try {
    let { data } = await api.post("/users/authenticate", user);
    setToken(data.token);
    localStorage.setItem("token", data.token);
    dispatch({
      payload: data.token,
      type: AUTH_TYPES.LOGIN_USER,
    });
    dispatch(setMessage(messageSerializer(data), "success"));
    dispatch(getAuthUser());
  } catch (err) {
    dispatch(setMessage(messageSerializer(err.response.data), "danger"));
  } finally {
    dispatch(setAuthLoading());
  }
};

export const getAuthUser = () => async (dispatch) => {
  dispatch(setAuthLoading());
  try {
    let { data } = await api.get("/users/authenticate");
    dispatch({
      payload: data,
      type: AUTH_TYPES.SET_AUTH_USER,
    });
  } catch (err) {
    console.log("GET_USER_ACTION", err.message);
    dispatch(logoutUser());
  } finally {
    dispatch(setAuthLoading());
  }
};

export const logoutUser = () => (dispatch) => {
  setToken();
  localStorage.clear();
  dispatch({
    type: AUTH_TYPES.LOGOUT_USER,
  });
  dispatch(setMessage("You are now logged out.", "info"));
};

export const setAuthLoading = () => ({
  type: AUTH_TYPES.LOADING,
});
