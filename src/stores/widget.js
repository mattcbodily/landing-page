import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { v4 as uuidv4 } from 'uuid'

export const useWidgetStore = defineStore('widgets', () => {
  const widgets = useStorage('widget-store', [])

  const addWidget = (component) => {
    widgets.value.push({
      uuid: uuidv4(),
      component,
      x: 16,
      y: 16,
    })
  }

  const updateWidgetPosition = (uuid, position) => {
    const foundWidget = widgets.value.find((element) => element.uuid === uuid)

    if (foundWidget) {
      foundWidget.x = position.x
      foundWidget.y = position.y
    }
  }

  return { widgets, addWidget, updateWidgetPosition }
})
