<template>
  <div
    class="w-screen h-screen grid grid-cols-3 p-32 items-center justify-center gap-3 bg-pink-200"
  >
    <MoodButton v-for="emotion in emotions" :key="emotion.id" :mood="emotion" />
  </div>
</template>

<script setup>
import MoodButton from "@/components/MoodButton.vue";

// Data
const emotions = [
  {
    id: 1,
    mood: "Happy 😄",
    color: "bg-pink-500",
  },
  {
    id: 2,
    mood: "Sad 😔",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    mood: "Angry 😡",
    color: "bg-red-500",
  },
  {
    id: 4,
    mood: "Missing 😓",
    color: "bg-red-700",
  },
  {
    id: 5,
    mood: "Kacheechiyaan 😠",
    color: "bg-purple-500",
  },
  {
    id: 6,
    mood: "Love 💘",
    color: "bg-amber-500",
  },
  {
    id: 7,
    mood: "Naraaz 😒",
    color: "bg-black",
  },
  {
    id: 8,
    mood: "Embarrased 🙈",
    color: "bg-orange-500",
  },
  {
    id: 9,
    mood: "Bored 🥱",
    color: "bg-white",
  },
  {
    id: 10,
    mood: "Moody 🤯",
    color: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  },
];
</script>
