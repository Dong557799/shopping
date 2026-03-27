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
    const singleCheck=(skuId,selected)=>{
        //通过skuId找到要操作的商品
        const item=cartList.value.find((item)=>item.skuId===skuId)
        item.selected=selected
    }
    //全选
    const allCheck=(selected)=>{
        cartList.value.forEach(item=>item.selected=selected)
    }

    //计算属性
    const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
    //是否全选
    const isAll=computed(()=>cartList.value.every((item)=>item.selected))
    return{
        cartList,
        addCart,
        delCart,
        isAll,
        allCount,
        allPrice,
        singleCheck,
        allCheck
    }
},{
    persist:true,
})