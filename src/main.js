import './assets/main.css'
// import { useIntersectionObserver } from '@vueuse/core'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
import {lazyPlugin} from './directives'
import {componentPlugin} from './components'

//pinia持久化
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//测试接口函数
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
    console.log(res)
})

const app = createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

