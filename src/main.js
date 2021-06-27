import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// assign routes to app
const app = createApp(App).use(router)

// mounting app
app.mount('#app')

