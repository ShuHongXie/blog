<!--
 * @Author: shuhongxie
 * @Date: 2021-05-24 10:03:35
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-24 10:27:53
 * @FilePath: /nuxt-blog/components/Footer.vue
-->
<template>
  <footer class="footer">
    <div class="footer__author">©2019 By 谢小谢</div>
    <div class="footer__uvpv">
      <i class="iconfont iconSeedling"></i>
      <span>1232</span>
      |
      <i class="iconfont iconEnergy"></i>
      <span>1232</span>
    </div>
    <a class="footer__code" href="http://beian.miit.gov.cn">粤ICP备19149086号</a>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'
  export default Vue.extend({
    data() {
      return {}
    },
    computed: {
      ...mapState('operate', ['sidebarStatus'])
    },
    methods: {
      handleSidebarStatus() {
        this.$store.commit('operate/handleSidebarStatus')
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';
  .footer {
    height: 132px;
    padding: 20px 0;
    box-sizing: border-box;
    background-image: url('/footer_bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    &__author,
    &__code {
      color: #fff;
      line-height: 24px;
      position: relative;
      z-index: 1;
    }
    &__uvpv {
      // height: 24px;
      line-height: 24px;
      color: #fff;
      i {
        color: #fff;
        margin: 0 4px;
        font-weight: 400;
        &:nth-child(4) {
          margin-left: 0;
        }
      }
    }
  }
</style>
