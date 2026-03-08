<script setup>
import LayoutNav from './commponents/LayoutNav.vue'
import LayoutHeader from './commponents/LayoutHeader.vue'
import LayoutFooter from './commponents/LayoutFooter.vue'
import LayoutFixed from './commponents/LayoutFixed.vue'
</script>
<template>
    <div>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
    
    </div>
</template>
