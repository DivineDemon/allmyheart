<template>
  <div
    :class="[
      `w-full h-full rounded-lg ${mood.color} flex items-center justify-center cursor-pointer`,
    ]"
  >
    <span
      class="text-2xl"
      :class="mood.mood === 'Naraaz 😒' ? 'text-white' : 'text-black '"
      >{{ mood.mood }}</span
    >
  </div>
</template>

<script setup>
defineProps({
  mood: Object,
});
</script>
