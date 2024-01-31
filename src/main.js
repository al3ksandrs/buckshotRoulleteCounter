import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// vercel analytics
import { inject } from '@vercel/analytics';
inject();

createApp(App).mount('#app')
