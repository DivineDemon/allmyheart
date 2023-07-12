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
    async sendNotification({ state }, payload) {
      await fetch("http://localhost:3000/api/notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: state.notificationToken,
        },
        body: JSON.stringify(payload),
      });
    },
  },
  plugins: [vuexLocal.plugin],
});
