import { createApp } from "vue";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import store from "./store";
import "@/assets/css/tailwind.css";

createApp(App)
  .use(store)
  .use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_CLIENT_ID,
  })
  .mount("#app");
