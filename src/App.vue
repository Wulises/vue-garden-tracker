<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="bg-red-100 p-4">
    <h1 class="text-3xl font-bold text-red-700">🌸 Vue Garden Tracker</h1>
    <p class="text-sm mt-2 text-gray-700">Inspirado por Haru, mi esposa 💖</p>
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
