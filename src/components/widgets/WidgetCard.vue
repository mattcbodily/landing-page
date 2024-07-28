<script setup>
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'
import { useWidgetStore } from '@/stores/widget'

const widgetStore = useWidgetStore()

const card = ref(null)

const { style } = useDraggable(card, {
  initialValue: {
    // Fix this to access the widget by its name
    x: widgetStore.widgets[0].x,
    y: widgetStore.widgets[0].y,
  },
  onEnd: (position) => {
    widgetStore.updateWidgetPosition(card.value.id, position)
  },
})
</script>

<template>
  <div
    ref="card"
    class="fixed p-4 text-slate-100 rounded-md drop-shadow-md cursor-grab active:cursor-grabbing"
    :style="style"
  >
    <slot />
  </div>
</template>
