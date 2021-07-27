import store from "../";
import AUTH_TYPES from "./types";
import router from "../../router";
import { api, setToken } from "../../services";

const state = {
  user: null,
  token: null,
  isAuth: false,
  authLoading: false,
};

const getters = {
  user: (state) => state.user,
  isAuth: (state) => state.isAuth,
  authLoading: (state) => state.authLoading,
};

const actions = {
  initApp({ commit, dispatch }) {
    let token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    commit(AUTH_TYPES.LOGIN_USER, { token });
    setToken(token);
    dispatch("getAuthUser");
  },

  async registerUser({ commit, dispatch }, user) {
    commit(AUTH_TYPES.AUTH_LOADING);
    try {
      let { data } = await api.post("/users/register", user);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      commit(AUTH_TYPES.LOGIN_USER, data);
      dispatch("getAuthUser");
      store.dispatch("messages/setAlert", {
        message: data.message,
        type: "success",
      });
    } catch (err) {
      // console.log("REGISTER_ERR", err.message);
      store.dispatch("messages/setAlert", {
        message: err.response.data,
        type: "danger",
      });
    } finally {
      commit(AUTH_TYPES.AUTH_LOADING);
    }
  },

  async loginUser({ commit, dispatch }, user) {
    commit(AUTH_TYPES.AUTH_LOADING);
    try {
      let { data } = await api.post("/users/authenticate", user);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      commit(AUTH_TYPES.LOGIN_USER, data);
      dispatch("getAuthUser");
      store.dispatch("messages/setAlert", {
        message: data.message,
        type: "success",
      });
    } catch (err) {
      // console.log("LOGIN_ERR", err.message);
      store.dispatch("messages/setAlert", {
        message: err.response.data,
        type: "danger",
      });
    } finally {
      commit(AUTH_TYPES.AUTH_LOADING);
    }
  },

  async getAuthUser({ commit }) {
    commit(AUTH_TYPES.AUTH_LOADING);
    try {
      let { data } = await api.get("/users/authenticate");
      commit(AUTH_TYPES.SET_AUTH_USER, data);
      router.push("/dashboard");
    } catch (err) {
      console.log("AUTH_USER_ERR", err.message);
    } finally {
      commit(AUTH_TYPES.AUTH_LOADING);
    }
  },

  async logoutUser({ commit }) {
    setToken();
    localStorage.clear();
    router.push("/auth/login");
    store.dispatch("messages/setAlert", {
      message: "You are now logged out.",
      type: "info",
    });
    commit(AUTH_TYPES.LOGOUT_USER);
  },
};

const mutations = {
  [AUTH_TYPES.LOGIN_USER](state, { token }) {
    state.token = token;
  },

  [AUTH_TYPES.SET_AUTH_USER](state, payload) {
    state.user = payload;
    state.isAuth = true;
  },

  [AUTH_TYPES.AUTH_LOADING](state) {
    state.authLoading = !state.authLoading;
  },

  [AUTH_TYPES.LOGOUT_USER](state) {
    state.user = null;
    state.token = null;
    state.isAuth = false;
    state.authLoading = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
