<script setup>
import { computed, onUnmounted, ref } from 'vue'
import WidgetCard from './WidgetCard.vue'

const timeLeft = ref(900000)
const isTimerActive = ref(false)

const formattedTimeLeft = computed(() => {
  const minutesLeft = Math.floor(timeLeft.value / 60000)
  const secondsLeft = Math.floor((timeLeft.value % 60000) / 1000)

  return `${minutesLeft}:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`
})

let timerInterval

const runTimer = () => {
  const now = new Date().getTime()
  const targetTime = now + timeLeft.value * 60000
  const updatedTimeLeft = targetTime - now

  if (updatedTimeLeft <= 0) {
    isTimerActive.value = false

    return clearInterval(timerInterval)
  }

  return (timeLeft.value -= 1000)
}

const isTimerActiveClick = () => {
  if (isTimerActive.value) {
    isTimerActive.value = false
    clearInterval(timerInterval)
  } else {
    isTimerActive.value = true
    timerInterval = setInterval(runTimer, 1000)
  }
}

const changeTimeLimit = (timeLimit) => {
  timeLeft.value = timeLimit
}

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
</script>

<template>
  <WidgetCard
    class="flex flex-col justify-around bg-gradient-to-br from-cyan-500 to-sky-700 col-span-2 row-span-2"
  >
    <p class="text-3xl text-center font-extrabold">{{ formattedTimeLeft }}</p>
    <div class="space-y-2">
      <div class="flex gap-1">
        <button
          class="flex-1 rounded-md bg-gradient-to-br from-slate-600 to-slate-800 font-semibold"
          @click="changeTimeLimit(900000)"
        >
          15
        </button>
        <button
          class="flex-1 rounded-md bg-gradient-to-br from-slate-600 to-slate-800 font-semibold"
          @click="changeTimeLimit(1800000)"
        >
          30
        </button>
        <button
          class="flex-1 rounded-md bg-gradient-to-br from-slate-600 to-slate-800 font-semibold"
          @click="changeTimeLimit(2700000)"
        >
          45
        </button>
      </div>
      <button
        class="w-full p-1 rounded-md bg-gradient-to-br from-slate-600 to-slate-800 font-semibold"
        @click="isTimerActiveClick"
      >
        {{ isTimerActive ? 'Pause' : 'Start' }}
      </button>
    </div>
  </WidgetCard>
</template>
