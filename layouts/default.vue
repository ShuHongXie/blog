<!--
 * @Author: shuhongxie
 * @Date: 2021-05-20 10:33:24
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-24 14:13:07
 * @FilePath: /nuxt-blog/layouts/default.vue
-->
<template>
  <div>
    <!-- 头部 -->
    <Header />
    <!-- 侧边栏 -->
    <Sidebar />
    <!-- 主区域导航 -->
    <Nav />
    <!-- 主区域 -->
    <Nuxt />
    <!-- 页脚 -->
    <Footer />
    <!-- 侧边栏开关 -->
    <SidebarControl />
    <!-- 滑到到顶部 -->
    <ToTop />
  </div>
</template>
