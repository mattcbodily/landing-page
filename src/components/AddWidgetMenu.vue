<script setup>
import { defineEmits } from 'vue'
import { useWidgetStore } from '@/stores/widget'

const widgetMap = {
  Clock: 'clock',
  Pomodoro: 'pomodoro',
  'Todo List': 'todo-list',
}

const emits = defineEmits(['add-widget'])

const widgetStore = useWidgetStore()

const addWidgetClick = (widget) => {
  widgetStore.addWidget(widget)
  emits('add-widget')
}
</script>

<template>
  <div
    class="absolute bottom-16 left-0 p-4 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700"
  >
    <div
      v-for="(widget, key) in widgetMap"
      :key="key"
      class="px-2 py-1 cursor-pointer hover:rounded-lg hover:bg-slate-800"
      @click="addWidgetClick(widget)"
    >
      <p>{{ key }}</p>
    </div>
  </div>
</template>
