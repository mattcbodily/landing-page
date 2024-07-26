<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import WidgetCard from './WidgetCard.vue'

const currentTime = ref(null)

let clockInterval

const getTime = () => {
  const time = new Date()
  let hour = time.getHours()
  let minutes = time.getMinutes()
  let amPm = 'AM'

  if (hour >= 12) {
    if (hour > 12) hour -= 12

    amPm = 'PM'
  } else if (hour === 0) {
    hour = 12
    amPm = 'AM'
  }

  hour = hour < 10 ? hour : hour
  minutes = minutes < 10 ? '0' + minutes : minutes

  currentTime.value = `${hour}:${minutes} ${amPm}`
}

onMounted(() => {
  getTime()

  clockInterval = setInterval(getTime, 30000)
})

onUnmounted(() => {
  clearInterval(clockInterval)
})
</script>

<template>
  <WidgetCard
    class="flex items-center justify-center col-span-2 row-span-2 bg-gradient-to-br from-teal-500 to-emerald-600"
    id="clock"
  >
    <p class="text-3xl text-center font-extrabold">{{ currentTime }}</p>
  </WidgetCard>
</template>
