<script setup>
import ToolBar from './components/ToolBar.vue'
import { useWidgetStore } from './stores/widget'

const widgetStore = useWidgetStore()
</script>

<template>
  <div class="relative min-h-screen p-4 bg-slate-100 dark:bg-slate-800 touch-none" id="widget-grid">
    <template v-for="widget in widgetStore.widgets" :key="widget.uuid">
      <component :is="widget.component" :widget-data="widget"> </component>
    </template>
  </div>
  <ToolBar />
</template>
