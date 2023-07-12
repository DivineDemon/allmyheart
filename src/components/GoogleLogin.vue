<template>
  <div
    v-if="user !== ''"
    class="flex flex-row items-center justify-center space-x-2"
  >
    <img :src="user.image" alt="user" class="rounded-full w-14 h-14 border" />
    <div class="flex flex-col items-center justify-start">
      <span>{{ user.name }}</span>
      <span>{{ user.email }}</span>
    </div>
  </div>
  <GoogleLogin
    v-else
    :callback="callback"
    :prompt="user !== '' ? true : false"
  />
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import { decodeCredential } from "vue3-google-login";

// Initialize Store
const store = useStore();

// Data
const user = ref("");

// Methods
const callback = (response) => {
  const userData = decodeCredential(response.credential);
  store.dispatch("addUser", {
    email: userData.email,
    name: userData.name,
    image: userData.picture,
  });
};

// Mounted
onMounted(() => {
  user.value = JSON.parse(localStorage.getItem("vuex")).user;
});
</script>
