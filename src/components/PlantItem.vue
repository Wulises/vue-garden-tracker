<template>
  <ul class="max-w-md w-full mx-auto mt-10 space-y-4">
    <li
      v-for="plant in plants"
      :key="plant.id"
      class="flex justify-between items-center p-4 bg-white/80 dark:bg-black/30 rounded shadow"
    >
      <div>
        <p class="font-semibold text-makotoBlue text-lg">{{ plant.name }}</p>
        <p class="text-kasumiRed text-sm opacity-80">Sembrada el: {{ plant.date }}</p>
      </div>
      <button
        @click="$emit('toggle-watered', plant.id)"
        :class="plant.watered
          ? 'bg-haruPurple text-white hover:bg-haruPurple/80'
          : 'bg-kasumiRed text-white hover:bg-kasumiRed/80'"
        class="px-4 py-2 rounded font-semibold transition"
      >
        {{ plant.watered ? '💧 Regada' : '💧 Marcar regada' }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  plants: Array,
})

const emit = defineEmits(['toggle-watered'])
</script>
