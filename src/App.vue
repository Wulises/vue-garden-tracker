<template>
  <div
    class="min-h-screen font-persona flex flex-col items-center p-6"
    style="background: linear-gradient(135deg, #7a5c99 0%, #e63946 50%, #1d3557 100%);"
  >
    <header class="mb-10 text-center text-white drop-shadow-lg">
      <h1 class="text-4xl font-bold mb-2">🌸 Vue Garden Tracker</h1>
      <p class="text-lg">Cuida tus plantas con un toque phandev</p>
    </header>

    <PlantForm @add-plant="addPlant" />

    <PlantList
      :plants="plants"
      @toggle-watered="toggleWatered"
      class="mt-10 max-w-md w-full"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PlantList from './components/PlantList.vue'
import PlantForm from './components/PlantForm.vue'

const plants = ref([
  { id: 1, name: 'Makoto', date: '2000-02-01', watered: false },
  { id: 2, name: 'Haru', date: '2000-02-01', watered: false },
])

function addPlant(plant) {
  plants.value.push({
    id: Date.now(),
    name: plant.name,
    date: plant.date,
    watered: false,
  })
}

function toggleWatered(id) {
  const plant = plants.value.find(p => p.id === id)
  if (plant) plant.watered = !plant.watered
}
</script>
