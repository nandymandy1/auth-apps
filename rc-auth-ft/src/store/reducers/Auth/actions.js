import authActions from "./types";

import { api, setToken } from "../../../services";

export const registerUser = (user) => async (dispatch) => {
  try {
    let { data } = await api.post("/users/register", user);
    console.log("REGISTER_DATA", data);
    setToken(data.token);
    localStorage.setItem("token", data.token);
    dispatch({
      type: authActions.AUTHENTICATE,
      payload: data,
    });
    // Get Auth User
    dispatch(getAuthUser());
  } catch (err) {
    console.log("ERR", err.message);
    console.log("ERR", err.response.data);
  }
};

export const getAuthUser = () => async (dispatch) => {
  try {
    let { data } = await api.get("/users/authenticate");
    dispatch({
      type: authActions.GET_AUTH_USER,
      payload: data,
    });
  } catch (err) {
    console.log("ERR", err.message);
    console.log("ERR", err.response);
  }
};

export const logoutUser = () => {
  localStorage.clear();
  setToken();
  return {
    type: authActions.LOGOUT_USER,
  };
};
