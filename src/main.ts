import { createApp } from 'vue'
import App from './App.vue'
import './styles/markdown.css'

createApp(App).mount('#app')

// Register PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // SW registration failed, continue without PWA
    })
  })
}
