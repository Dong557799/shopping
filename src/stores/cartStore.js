import {defineStore} from 'pinia'
import {ref,computed} from 'vue'

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

    //计算属性
    const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice
    }
},{
    persist:true,
})