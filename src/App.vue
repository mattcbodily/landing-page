<script setup>
import Clock from './components/widgets/Clock.vue'
import Pomodoro from './components/widgets/Pomodoro.vue'
import TodoList from './components/widgets/TodoList.vue'
import ToolBar from './components/ToolBar.vue'
import { useWidgetStore } from './stores/widget'

const widgetStore = useWidgetStore()

const widgetMap = {
  'clock': Clock,
  'pomodoro': Pomodoro,
  'todo-list': TodoList, 
}
</script>

<template>
  <div
    class="min-h-screen p-4 bg-slate-100 dark:bg-slate-800"
    id="widget-grid"
  >
    <template v-for="widget in widgetStore.widgets" :key="widget.uuid">
      <component :is="widgetMap[widget.widget]" :widget-position="{ x: widget.x, y: widget.y }"></component>
    </template>
  </div>
  <ToolBar />
</template>
