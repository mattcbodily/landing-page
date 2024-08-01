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
  <div class="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-slate-900/70">
    <div
      class="rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 p-6 text-white"
      ref="modal"
    >
      <div class="grid h-fit w-fit grid-cols-2 grid-rows-1 gap-6">
        <ul class="col-span-1 row-span-1 h-40 w-full space-y-1">
          <li
            v-for="(widget, key) in widgetMap"
            class="w-48 cursor-pointer rounded-lg p-2 text-center hover:bg-slate-800"
            :class="widget === selectedWidget ? 'bg-slate-800' : ''"
            @click="selectedWidget = widget"
          >
            {{ key }}
          </li>
        </ul>
        <div class="col-span-1 row-span-1 h-fit w-full">
          <template v-if="selectedWidget">
            <component :is="selectedWidget" :is-preview-mode="true"></component>
          </template>
          <div
            v-else
            class="flex h-40 items-center justify-center rounded-lg border border-dashed border-slate-100/50"
          >
            <p class="text-slate-100/50">Select a widget</p>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 pt-6">
        <button
          class="rounded-lg bg-gradient-to-br from-indigo-700 to-indigo-800 px-4 py-2 transition-all hover:from-indigo-800 hover:to-indigo-900 hover:drop-shadow-md"
          @click="addWidgetClick(selectedWidget)"
        >
          Add Widget
        </button>
        <button
          class="rounded-lg bg-slate-800 px-4 py-2 transition-all hover:bg-slate-600 hover:drop-shadow-md"
          @click="emits('close-modal')"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
