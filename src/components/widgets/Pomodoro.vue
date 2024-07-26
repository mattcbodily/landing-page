<script setup>
import { onUnmounted, ref } from 'vue'
import WidgetCard from './WidgetCard.vue'

const timeLeft = ref('15:00')
const isTimerActive = ref(false)

let timerInterval

// const checkTime = () => {
//   const now = new Date()
//   const targetTime = new Date(now.getTime() + (timeLeft * 60000))

//   if (targetTime - now < 0) {

//   }
// }

const isTimerActiveClick = () => {
  if (isTimerActive.value) {
    isTimerActive.value = false
  } else {
    isTimerActive.value = true
  }
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
    <p class="text-3xl text-center font-extrabold">{{ timeLeft }}</p>
    <div class="space-y-2">
      <div class="flex gap-1">
        <button class="flex-1 rounded-md bg-gradient-to-br from-slate-600 to-slate-800 font-semibold">15</button>
        <button class="flex-1 rounded-md bg-gradient-to-br from-slate-600 to-slate-800 font-semibold">30</button>
        <button class="flex-1 rounded-md bg-gradient-to-br from-slate-600 to-slate-800 font-semibold">45</button>
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