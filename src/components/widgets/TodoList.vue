<script setup>
import { onMounted, ref } from 'vue'

import WidgetCard from './WidgetCard.vue'
</script>

<template>
  <WidgetCard 
    class="bg-gradient-to-br from-violet-500 to-indigo-600 col-span-4 row-span-4">
    TodoList Widget
  </WidgetCard>
</template>