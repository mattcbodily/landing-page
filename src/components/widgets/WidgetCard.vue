<script setup>
import { defineProps, ref } from 'vue'
import { useDraggable } from '@vueuse/core'
import { useWidgetStore } from '@/stores/widget'

const widgetStore = useWidgetStore()

const props = defineProps(['widgetPosition'])

const card = ref(null)

const { style } = useDraggable(card, {
  initialValue: { 
    x: props.widgetPosition.x, 
    y: props.widgetPosition.y 
  },
  onEnd: (position) => {
    widgetStore.updateWidgetPosition(card.value.id, position)
  }
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
