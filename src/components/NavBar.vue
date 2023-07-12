<template>
  <nav
    class="fixed top-0 w-full flex flex-row items-center justify-between py-3 px-7 bg-white shadow-lg"
  >
    <!-- Logo -->
    <div class="flex flex-row items-center justify-center space-x-2">
      <img src="../assets/img/logo.png" alt="logo" class="w-12 h-12" />
      <span>All My Heart</span>
    </div>

    <!-- Google Login -->
    <GoogleLogin />
  </nav>
</template>

<script setup>
import GoogleLogin from "./GoogleLogin.vue";
</script>
