<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

import Clock from './components/widgets/Clock.vue'
import TodoList from './components/widgets/TodoList.vue'
import Pomodoro from './components/widgets/Pomodoro.vue'
import ToolBar from './components/ToolBar.vue'

import sampleData from './assets/sampleData.json'

const gridColumnWidth = ref(null)
const widgets = ref(sampleData.widgets)

let widgetGridResizeObserver

const observeWidgetGridSize = () => {
  widgetGridResizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { contentRect } = entry
      const fullWidth = contentRect.width + contentRect.top + contentRect.left

      if (fullWidth < 640) {
        gridColumnWidth.value = contentRect.width / 4
      } else if (fullWidth >= 640 && fullWidth < 768) {
        gridColumnWidth.value = contentRect.width / 6
      } else if (fullWidth >= 768) {
        gridColumnWidth.value = contentRect.width / 8
      }
    }
  })

  widgetGridResizeObserver.observe(document.querySelector('#widget-grid'))
}

const handleDrop = ($event) => {
  console.log(Math.round($event.clientX / gridColumnWidth.value))
}

onMounted(() => {
  observeWidgetGridSize()
})

onUnmounted(() => {
  widgetGridResizeObserver?.disconnect()
})
</script>

<template>
  <div
    class="bg-slate-100 dark:bg-slate-800 min-h-screen p-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 auto-rows-[75px] gap-2"
    id="widget-grid"
    @dragenter.prevent
    @dragover.prevent
    @drop="handleDrop($event)"
  >
    <Clock />
    <Pomodoro />
    <TodoList />
  </div>
  <div class="fixed bottom-4 w-full px-4">
    <ToolBar />
  </div>
</template>
