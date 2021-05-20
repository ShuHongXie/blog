<!--
 * @Author: shuhongxie
 * @Date: 2021-05-20 13:39:50
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-20 13:47:46
 * @FilePath: /nuxt-blog/pages/user/_id/index.vue
-->
<!--
 * @Author: shuhongxie
 * @Date: 2021-05-20 11:46:24
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-20 11:57:06
 * @FilePath: /nuxt-blog/pages/user/index.vue
-->
<template>
  <div class="container">
    <div>
      <Logo />
      这是内容{{ $route.params.id }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
