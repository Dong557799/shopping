//管理用户数据
import {defineStore} from 'pinia'
import {loginAPI} from '@/apis/user'
import { ref } from 'vue'


export const useUserStore=defineStore('user',()=>{
    //1定义管理用户数据state
    const userInfo=ref({})
    //2.定义获取接口的action函数
    const getUserInfo=async({account,password})=>{
        const res= await loginAPI({account,password})
        userInfo.value=res.result
    }
    return{
        userInfo,
        getUserInfo
    }
})