import { createSSRApp } from 'vue'
import app from './App.vue'

export default function createApp(){
   return createSSRApp(app)
}