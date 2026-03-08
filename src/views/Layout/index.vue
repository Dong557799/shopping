<script setup>
import LayoutNav from './commponents/LayoutNav.vue'
import LayoutHeader from './commponents/LayoutHeader.vue'
import LayoutFooter from './commponents/LayoutFooter.vue'
</script>
<template>
    <div>
    <LayoutNav />
    <LayoutHeader />
    <!--二级路由出口-->>
    <RouterView />
    <LayoutFooter />
    </div>
</template>
