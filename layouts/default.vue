<!--
 * @Author: shuhongxie
 * @Date: 2021-05-20 10:33:24
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-26 10:29:33
 * @FilePath: /nuxt-blog/layouts/default.vue
-->
<template>
  <div>
    <!-- 头部 -->
    <Header />
    <!-- 侧边栏 -->
    <Sidebar />
    <!-- 飘雪特效 -->
    <Snow />
    <!-- 查询区 -->
    <Search />
    <!-- 主区域导航 -->
    <Nav />
    <!-- 主区域 -->
    <div class="container">
      <Nuxt :key="key" />
    </div>
    <!-- 页脚 -->
    <Footer />
    <!-- 侧边栏开关 -->
    <SidebarControl />
    <!-- 滑到到顶部 -->
    <ToTop />
  </div>
</template>

<script>
  import Vue from 'vue'
  import { initSnowflake } from '@/utils'
  export default Vue.extend({
    key(route) {
      return route.fullPath
    },
    data() {
      return {
        isChangeRoute: true
      }
    },
    watch: {
      $route() {}
    },
    mounted() {
      console.log('初始化了')
    }
  })
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    z-index: 2;
    animation: tran 1s 1;
  }
  @keyframes tran {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
