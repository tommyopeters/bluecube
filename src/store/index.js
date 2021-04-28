import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state() {
    return {
      count: 0,
      users: {},
    };
  },
  mutations: {},
});

// const capitalize = s => {
//   if (typeof s !== "string") return "";
//   return s.charAt(0).toUpperCase() + s.slice(1);
// };
