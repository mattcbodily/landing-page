<script setup>
import ToolBar from './components/ToolBar.vue'
import { useWidgetStore } from './stores/widget'

const widgetStore = useWidgetStore()
</script>

<template>
  <div class="relative min-h-screen touch-none bg-slate-100 p-4 dark:bg-slate-800" id="widget-grid">
    <template v-for="widget in widgetStore.widgets" :key="widget.uuid">
      <component :is="widget.component" :widget-data="widget"> </component>
    </template>
  </div>
  <ToolBar />
</template>
