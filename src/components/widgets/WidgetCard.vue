<script setup>
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'
import { useWidgetStore } from '@/stores/widget'

const widgetStore = useWidgetStore()

const props = defineProps({
  isPreviewMode: {
    type: Boolean,
    default: false,
  },
  widgetData: {
    type: Object,
    default: function () {
      return {
        component: '',
        uuid: '',
        x: 0,
        y: 0,
      }
    },
  },
})

const card = ref(null)

const { style } = useDraggable(card, {
  containerElement: document.querySelector('#widget-grid'),
  disabled: props.isPreviewMode,
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
    class="cursor-grab rounded-md p-4 text-slate-100 drop-shadow-md active:cursor-grabbing"
    :class="!props.isPreviewMode ? 'fixed' : 'initial'"
    :style="!props.isPreviewMode ? style : null"
  >
    <slot />
  </div>
</template>
