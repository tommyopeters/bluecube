import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import { store } from "./store";
import { routes } from "./routes";

Vue.use(VueRouter);

Vue.config.productionTip = false;

export const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
