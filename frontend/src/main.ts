import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { bootstrapPlugin } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

import './assets/css/reset.css'
import './assets/css/common.css'


const app = createApp(App)

app.use(router)
app.use(bootstrapPlugin);
app.mount('#app')

