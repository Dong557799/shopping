import { ref} from 'vue'
import { defineStore } from 'pinia'
import { getCateGoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  const categoryList=ref([])
  const getCategory=async()=>{
    const res=await getCateGoryAPI()
   
    categoryList.value=res.result
}
return {
    categoryList,
    getCategory
}
})
