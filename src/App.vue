<template>
  <NavBar />
  <HomeView />
</template>

<script setup>
import HomeView from "@/pages/HomeView.vue";
import NavBar from "./components/NavBar.vue";

import { useStore } from "vuex";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
});

getToken(messaging, { vapidKey: process.env.VUE_APP_VAP_ID })
  .then((currentToken) => {
    if (currentToken) {
      store.dispatch("addNotificationToken", currentToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });
</script>
