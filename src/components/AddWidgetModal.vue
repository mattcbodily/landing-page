<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useWidgetStore } from '@/stores/widget'

const widgetMap = {
  Clock: 'clock',
  Pomodoro: 'pomodoro',
  'Todo List': 'todo-list',
}

const emits = defineEmits(['close-modal'])

const widgetStore = useWidgetStore()

const modal = ref(null)
const selectedWidget = ref('')

onClickOutside(modal, (event) => emits('close-modal'))

const addWidgetClick = (component) => {
  widgetStore.addWidget(component)
  emits('close-modal')
}
</script>

<template>
  <div class="fixed top-0 left-0 flex items-center justify-center h-screen w-full bg-slate-900/70">
    <div
      class="p-6 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 text-white"
      ref="modal"
    >
      <div class="grid grid-cols-2 grid-rows-1 gap-6 h-fit w-fit">
        <ul class="h-40 w-full space-y-1 col-span-1 row-span-1">
          <li
            v-for="(widget, key) in widgetMap"
            class="w-48 p-2 text-center cursor-pointer rounded-lg hover:bg-slate-800"
            :class="widget === selectedWidget ? 'bg-slate-800' : ''"
            @click="selectedWidget = widget"
          >
            {{ key }}
          </li>
        </ul>
        <div class="h-fit w-full col-span-1 row-span-1">
          <template v-if="selectedWidget">
            <component :is="selectedWidget" :is-preview-mode="true"></component>
          </template>
          <div
            v-else
            class="flex items-center justify-center h-40 border border-dashed border-slate-100/50 rounded-lg"
          >
            <p class="text-slate-100/50">Select a widget</p>
          </div>
        </div>
      </div>
      <div class="pt-6 flex justify-end gap-2">
        <button
          class="px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-700 hover:from-indigo-800 to-indigo-800 hover:to-indigo-900 hover:drop-shadow-md transition-all"
          @click="addWidgetClick(selectedWidget)"
        >
          Add Widget
        </button>
        <button
          class="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-600 hover:drop-shadow-md transition-all"
          @click="emits('close-modal')"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
