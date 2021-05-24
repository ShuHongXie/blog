<!--
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:04:27
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-24 10:03:09
 * @FilePath: /nuxt-blog/components/ToTop.vue
-->
<template>
  <i class="iconfont icontop jump__top" @click="toTop"></i>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data() {
      return {}
    },
    methods: {
      toTop() {
        let scrollH: number = document.documentElement.scrollTop || document.body.scrollTop
        const timer = setInterval(() => {
          scrollH -= 16
          if (scrollH > 0) {
            window.scrollTo(0, scrollH)
          } else {
            window.scrollTo(0, 0)
            clearInterval(timer)
          }
        }, 10)
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';
  .jump__top {
    position: fixed;
    right: 16px;
    bottom: 20px;
    z-index: 890;
    font-size: 32px;
    cursor: pointer;
    color: $page_link_color;
  }
</style>
