<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import WidgetCard from './WidgetCard.vue'

const currentDate = ref(null)
const currentTime = ref(null)

let clockInterval

const getTime = () => {
  const now = new Date()

  currentDate.value = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
  }).format(now)

  currentTime.value = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(now)
}

onMounted(() => {
  getTime()

  clockInterval = setInterval(getTime, 60000)
})

onUnmounted(() => {
  clearInterval(clockInterval)
})
</script>

<template>
  <WidgetCard
    id="clock"
    class="h-40 w-48 flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-teal-500 to-emerald-600"
  >
    <p class="text-lg font-semibold select-none">{{ currentDate }}</p>
    <p class="text-3xl font-extrabold select-none">{{ currentTime }}</p>
  </WidgetCard>
</template>
