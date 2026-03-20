import './assets/main.css'
// import { useIntersectionObserver } from '@vueuse/core'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
import {lazyPlugin} from './directives'
import {componentPlugin} from './components'
//测试接口函数
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
    console.log(res)
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
// //定义全局el指令绑定元素，binding.value指令等于号后面绑定的表达式的值 图片url
// app.directive('img-lazy',{
//     mounted(el,binding){
//         console.log(el,binding.value)
//         useIntersectionObserver(el,
//             ([{isIntersecting}])=>{
//                 console.log(isIntersecting)
//                 if(isIntersecting){
//                     //进入视口
//                     el.src=binding.value
//                 }
//             }
//         )
//     }
// })
