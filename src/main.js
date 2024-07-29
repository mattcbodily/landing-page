import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Clock from './components/widgets/Clock.vue'
import Pomodoro from './components/widgets/Pomodoro.vue'
import TodoList from './components/widgets/TodoList.vue'

const pinia = createPinia()
const app = createApp(App)

app.component('clock', Clock)
app.component('pomodoro', Pomodoro)
app.component('todo-list', TodoList)

app.use(pinia)
app.mount('#app')
