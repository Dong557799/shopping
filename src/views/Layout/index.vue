<script setup>
import LayoutNav from './commponents/LayoutNav.vue'
import LayoutHeader from './commponents/LayoutHeader.vue'
import LayoutFooter from './commponents/LayoutFooter.vue'
import LayoutFixed from './commponents/LayoutFixed.vue'

//触发获取导航列表的action
import {useCategoryStore} from '@/stores/category'
import { onMounted } from 'vue'
const categoryStore=useCategoryStore()
onMounted(()=>{
    categoryStore.getCategory()
})
</script>
<template>
    <div>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />

    <!-- <RouterView :key="$route.fullPath" /> -->
     <RouterView />

    <LayoutFooter />
    
    </div>
</template>
