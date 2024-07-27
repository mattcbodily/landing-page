import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useWidgetStore = defineStore('widgets', () => {
  const widgets = useStorage('widget-store', [])

  const updateWidgetPosition = (widget, position) => {
    const foundWidget = widgets.value.find(element => element.widget === widget)

    if (foundWidget) {
      foundWidget.x = position.x
      foundWidget.y = position.y
    }
  }

  return { widgets, updateWidgetPosition }
})