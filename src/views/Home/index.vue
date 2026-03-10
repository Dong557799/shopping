<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <div>查抄</div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="热门商品 必选收藏">
    <div>差好吃</div>
  </HomePanel>
</template>