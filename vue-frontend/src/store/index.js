import { createStore, createLogger } from "vuex";

import auth from "./auth";
import messages from "./messages";

const store = createStore({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    auth,
    messages,
  },
  plugins: [createLogger()],
});

export default store;
