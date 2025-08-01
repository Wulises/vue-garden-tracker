<template>
    <form @submit.prevent="submit" class="bg-haruPurple p-6 rounded-lg shadow-md max-w-md w-full mx-auto text-white">
        <h2 class="text-sakuraPink text-2xl font-bold mb-4 text-center">
            🌸 Añade tu planta!!!
        </h2>

        <input v-model="name" placeholder="Nombre de la planta"
            class="w-full mb-4 p-3 rounded border border-haruPurple bg-transparent placeholder-haruPurple text-white focus:outline-none focus:ring-2 focus:ring-kasumiRed transition"
            required />

        <input v-model="date" type="date"
            class="w-full mb-6 p-3 rounded border border-haruPurple bg-transparent placeholder-haruPurple text-white focus:outline-none focus:ring-2 focus:ring-kasumiRed transition"
            required />

        <button type="submit"
            class="w-full bg-kasumiRed text-white font-semibold py-3 rounded hover:bg-kasumiRed/90 transition text-center uppercase">
            Añadir Planta
        </button>

    </form>
</template>

<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['add-plant'])

const name = ref('')
const date = ref('')

function submit() {
    if (!name.value || !date.value) return

    emit('add-plant', {
        name: name.value.trim(),
        date: date.value,
    })

    name.value = ''
    date.value = ''
}
</script>
