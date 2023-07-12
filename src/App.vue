<template>
  <NavBar />
  <HomeView />
</template>

<script setup>
import { useStore } from "vuex";
import { toast } from "vue3-toastify";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import "vue3-toastify/dist/index.css";
import HomeView from "@/pages/HomeView.vue";
import NavBar from "./components/NavBar.vue";

// Initialize Store
const store = useStore();

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging();
onMessage(messaging, () => {
  toast.info("Message Received!");
});

getToken(messaging, { vapidKey: process.env.VUE_APP_VAP_ID })
  .then((currentToken) => {
    if (currentToken) {
      store.dispatch("addNotificationToken", currentToken);
    } else {
      Notification.requestPermission()
        .then((permission) => {
          if (permission === "granted") {
            toast.success("Notifications Enabled");
          } else {
            toast.warning("Notifications Disabled");
          }
        })
        .catch((error) => {
          toast.info(`Notification Permission Rejected, ${error.message}`);
        });
    }
  })
  .catch((err) => {
    toast.info(`Authorization Issue, ${err}`);
  });
</script>
