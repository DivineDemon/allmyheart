import { createStore } from "vuex";
import { vuexLocal } from "@/plugins/persist";

export default createStore({
  state: {
    user: {},
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, payload) {
      Object.assign(state.user, payload);
    },
  },
  actions: {
    async addUser({ commit }, payload) {
      commit("setUser", payload);
    },
  },
  plugins: [vuexLocal.plugin],
});
