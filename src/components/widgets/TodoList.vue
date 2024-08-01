<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import WidgetCard from './WidgetCard.vue'

const props = defineProps(['widgetData'])

const todoInput = ref('')
const todoList = ref([])

const addTodo = () => {
  if (!todoInput.value) return

  todoList.value.push({
    uuid: uuidv4(),
    title: todoInput.value,
  })

  todoInput.value = ''
}

const deleteTodo = (uuid) => {
  todoList.value = todoList.value.filter((element) => element.uuid !== uuid)
}
</script>

<template>
  <WidgetCard
    class="h-80 w-[392px] space-y-2 bg-gradient-to-br from-violet-500 to-indigo-600"
    :widget-data="props.widgetData"
  >
    <form class="flex items-center" @submit.prevent>
      <input
        v-model="todoInput"
        class="h-12 flex-1 rounded-l-md px-4 text-slate-950 drop-shadow-md"
        placeholder="Add a todo"
      />
      <button
        class="h-12 rounded-r-md bg-gradient-to-br from-slate-600 to-slate-800 px-4 drop-shadow-md"
        type="submit"
        @click="addTodo"
        @submit="addTodo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </form>
    <div class="max-h-[230px] space-y-2 overflow-auto shadow-lg">
      <div
        v-for="todo in todoList"
        class="flex h-12 items-center justify-between rounded-md bg-gradient-to-br from-slate-600 to-slate-800 px-4 drop-shadow-md"
        :key="todo.uuid"
      >
        <p class="text-lg">{{ todo.title }}</p>
        <button class="transition-colors hover:text-emerald-500" @click="deleteTodo(todo.uuid)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </WidgetCard>
</template>
