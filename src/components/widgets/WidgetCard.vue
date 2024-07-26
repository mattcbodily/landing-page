<script setup>
import { ref } from 'vue'

const isDragging = ref(false)

const handleDragStart = (event) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemId', event.target.id)

  isDragging.value = true
}

const handleDragEnd = () => {
  isDragging.value = false
}
</script>

<template>
  <div
    :class="`p-4 text-slate-100 rounded-md drop-shadow-md ${isDragging ? 'opacity-50' : ''}`"
    ref="card"
    draggable="true"
    @dragend="handleDragEnd($event)"
    @dragstart="handleDragStart($event)"
  >
    <slot />
  </div>
</template>
