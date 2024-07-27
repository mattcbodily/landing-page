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
    class="flex flex-col items-center justify-center gap-1 col-span-2 row-span-2 bg-gradient-to-br from-teal-500 to-emerald-600"
    id="clock"
  >
    <p class="text-lg font-semibold">{{ currentDate }}</p>
    <p class="text-3xl font-extrabold">{{ currentTime }}</p>
  </WidgetCard>
</template>
