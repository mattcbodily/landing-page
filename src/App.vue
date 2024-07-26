<script setup>
import PageHeader from './components/PageHeader.vue'
import Clock from './components/widgets/Clock.vue'
import TodoList from './components/widgets/TodoList.vue'
import Pomodoro from './components/widgets/Pomodoro.vue'
</script>

<template>
  <PageHeader />
  <div
    class="bg-slate-100 dark:bg-slate-800 min-h-screen px-4 pt-20 pb-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 auto-rows-[75px] gap-2"
    @dragenter.prevent
    @dragover.prevent
    @drop="(event) => console.log('drop', event)"
  >
    <Clock />
    <Pomodoro />
    <TodoList />
  </div>
</template>
