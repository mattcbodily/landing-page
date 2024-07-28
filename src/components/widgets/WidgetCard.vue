<script setup>
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'
import { useWidgetStore } from '@/stores/widget'

const widgetStore = useWidgetStore()

const props = defineProps(['widgetData'])

const card = ref(null)

const { style } = useDraggable(card, {
  containerElement: document.querySelector('#widget-grid'),
  initialValue: {
    x: props.widgetData.x,
    y: props.widgetData.y,
  },
  onEnd: (position) => {
    widgetStore.updateWidgetPosition(props.widgetData.uuid, position)
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
