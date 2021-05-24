<!--
 * @Author: shuhongxie
 * @Date: 2021-05-21 18:23:15
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-24 15:12:30
 * @FilePath: /nuxt-blog/components/SidebarControl.vue
-->
<template>
  <i
    :class="['iconfont iconright sidebar__controller', sidebarStatus ? 'open' : '']"
    @click="handleSidebarStatus"
  ></i>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import { handleSidebar } from '~/utils'
  export default Vue.extend({
    data() {
      return {}
    },
    computed: {
      ...mapState('operate', ['sidebarStatus'])
    },
    methods: {
      /**
       * @description: 侧边栏控制
       */
      handleSidebarStatus() {
        handleSidebar(this.sidebarStatus, () => {
          this.$store.commit('operate/handleSidebarStatus')
          if (!this.sidebarStatus) {
            const navNode = document.querySelector('.header') as HTMLElement
            navNode.style.maxWidth = '100%'
          }
        })
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';
  .sidebar__controller {
    position: fixed;
    left: 16px;
    bottom: 20px;
    z-index: 899;
    font-size: 20px;
    cursor: pointer;
    color: $page_link_color;
    transition: 0.3s;
    &.open {
      transform: rotate(180deg);
    }
  }
  @media screen and (max-width: 768px) {
    .sidebar__controller {
      display: none;
    }
    body {
      padding: 0;
    }
  }
</style>
