import { createStore } from "vuex";
import { vuexLocal } from "@/plugins/persist";

export default createStore({
  state: {
    user: {},
    notificationToken: "",
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getNotificationToken(state) {
      return state.notificationToken;
    },
  },
  mutations: {
    setUser(state, payload) {
      Object.assign(state.user, payload);
    },
    setNotificationToken(state, payload) {
      state.notificationToken = payload;
    },
  },
  actions: {
    async addUser({ commit }, payload) {
      commit("setUser", payload);
    },
    async addNotificationToken({ commit }, payload) {
      commit("setNotificationToken", payload);
    },
  },
  plugins: [vuexLocal.plugin],
});
