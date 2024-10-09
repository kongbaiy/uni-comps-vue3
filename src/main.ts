import { createSSRApp } from 'vue'

import App from './App.vue'
import './components/index.scss'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
