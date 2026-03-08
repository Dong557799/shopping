import httpInstance from '@/utils/http'

export function getCateGoryAPI(){
    return httpInstance({
        url:'/home/category/head'
    })
}
