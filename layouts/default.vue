<!--
 * @Author: shuhongxie
 * @Date: 2021-05-20 10:33:24
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-10 11:26:15
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
      <Nuxt />
    </div>
    <!-- 页脚 -->
    <Footer />
    <!-- 侧边栏开关 -->
    <SidebarControl />
    <!-- 滑到到顶部 -->
    <ToTop />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import config from '@/config'
  export default Vue.extend({
    middleware: 'common',
    data() {
      return {}
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
