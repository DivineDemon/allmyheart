<template>
  <div
    :class="[
      `w-full h-full rounded-lg ${mood.color} flex items-center justify-center cursor-pointer`,
    ]"
    @click="sendNotification(mood.mood)"
  >
    <span
      class="text-2xl"
      :class="mood.mood === 'Naraaz 😒' ? 'text-white' : 'text-black '"
      >{{ mood.mood }}</span
    >
  </div>
</template>

<script setup>
import { useStore } from "vuex";

// Initialize Store
const store = useStore();
const user = store.getters.getUser;

// Props
defineProps({
  mood: Object,
});

// Methods
const sendNotification = (mood) => {
  let data = JSON.parse(JSON.stringify(user));
  store.dispatch("sendNotification", {
    title: "All My Heart",
    body: `${data.name} is feeling ${mood}!`,
  });
};
</script>
