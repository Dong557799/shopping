//管理用户数据
import {defineStore} from 'pinia'
import {loginAPI} from '@/apis/user'
import { ref } from 'vue'
import {useCartStore} from './cartStore'

export const useUserStore=defineStore('user',()=>{
    const cartStore=useCartStore()
    //1定义管理用户数据state
    const userInfo=ref({})
    //2.定义获取接口的action函数
    const getUserInfo=async({account,password})=>{
        const res= await loginAPI({account,password})
        userInfo.value=res.result
    }

    const clearUserInfo=()=>{
        userInfo.value={}
        //清除购物车数据
        cartStore.clearCart()
    }   
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
{
    persist: true,
})