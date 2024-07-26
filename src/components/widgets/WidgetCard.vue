<script setup>
const handleDragStart = (event) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemId', event.target.id)
}
</script>

<template>
  <div
    class="p-4 text-slate-100 rounded-md drop-shadow-md"
    draggable="true"
    @dragstart="handleDragStart($event)"
  >
    <slot />
  </div>
</template>
