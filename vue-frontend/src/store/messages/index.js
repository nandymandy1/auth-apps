import MESSAGE_TYPES from "./types";
import { messageSerializer } from "./messageSerializer";

const state = {
  type: null,
  message: null,
};

const getters = {
  type: (state) => state.type,
  message: (state) => state.message,
};

const actions = {
  setAlert({ commit }, payload) {
    commit(MESSAGE_TYPES.SET_ALERT, {
      message: messageSerializer(payload.message),
      type: payload.type,
    });

    setTimeout(() => {
      commit(MESSAGE_TYPES.RESET_ALERT);
    }, 5000);
  },
};

const mutations = {
  [MESSAGE_TYPES.SET_ALERT](state, payload) {
    state.type = payload.type;
    state.message = payload.message;
  },

  [MESSAGE_TYPES.RESET_ALERT](state) {
    state.type = null;
    state.message = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
