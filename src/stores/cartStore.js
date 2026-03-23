import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useCartStore=defineStore('cart',()=>{
    const cartList=ref([])
    const addCart=(goods)=>{
        //添加购物车操作
        const item=cartList.value.find((item)=>goods.skuId===item.skuId)
        if(item){
            item.count++
        }else{
            cartList.value.push(goods)
        }
    }
    const delCart=(skuId)=>{
        //找到要删除的下标值splice/过滤filter
        const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
        cartList.value.splice(idx,1)
    }
    return{
        cartList,
        addCart,
        delCart
    }
},{
    persist:true,
})