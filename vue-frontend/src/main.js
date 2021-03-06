import App from "./App.vue";
import "./registerServiceWorker";
import { createApp } from "vue";
import router from "./router";
import store from "./store";

import "./assets/scss/main.scss";

store.dispatch("auth/initApp");

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
