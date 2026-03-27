import request from '@/utils/http'


//添加购物车
export const insertCartAPI=({skuId,count})=>{
    return request({
        url:'/member/cart',
        method:'POST',
        data:{
            skuId,
            count
        }
    })
}
//获取最新购物车
export const findNewCartListAPI=()=>{
    return request({
        url:'/member/cart'
    })
}