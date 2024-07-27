<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import WidgetCard from './WidgetCard.vue'

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
    id="todo-list"
    class="h-80 w-96 bg-gradient-to-br from-violet-500 to-indigo-600 space-y-2"
  >
    <form class="flex items-center" @submit.prevent>
      <input
        v-model="todoInput"
        class="flex-1 h-12 px-4 rounded-l-md text-slate-950 drop-shadow-md"
        placeholder="Add a todo"
      />
      <button
        class="h-12 px-4 bg-gradient-to-br from-slate-600 to-slate-800 rounded-r-md drop-shadow-md"
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
    <div class="max-h-[230px] overflow-auto space-y-2 shadow-lg">
      <div
        v-for="todo in todoList"
        class="h-12 px-4 flex items-center justify-between bg-gradient-to-br from-slate-600 to-slate-800 rounded-md drop-shadow-md"
        :key="todo.uuid"
      >
        <p class="text-lg">{{ todo.title }}</p>
        <button class="hover:text-emerald-500 transition-colors" @click="deleteTodo(todo.uuid)">
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
