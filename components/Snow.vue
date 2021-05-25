<!--
 * @Author: shuhongxie
 * @Date: 2021-05-25 19:24:06
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-25 19:43:56
 * @FilePath: /nuxt-blog/components/Snow.vue
-->
<template>
  <canvas id="snow"></canvas>
</template>

<script>
  import Vue from 'vue'
  import { initSnowflake } from '@/utils'
  export default Vue.extend({
    data() {
      return {}
    },
    mounted() {
      initSnowflake('snow')
    },
    methods: {}
  })
</script>

<style lang="scss" scoped>
  #snow {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
  }
</style>
