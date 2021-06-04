<!--
 * @Author: shuhongxie
 * @Date: 2021-05-21 18:23:15
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-04 15:58:59
 * @FilePath: /nuxt-blog/components/SidebarControl.vue
-->
<template>
  <i
    :class="['iconfont iconright sidebar__controller', sidebarStatus ? 'open' : '']"
    @click="handleSidebarStatus(!sidebarStatus)"
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
    watch: {
      $route(res) {
        this.initSidebar()
      }
    },
    mounted() {
      console.log('完成')
      this.initSidebar()
    },
    methods: {
      initSidebar() {
        console.log(this.sidebarStatus)

        handleSidebar(this.sidebarStatus, () => {
          if (!this.sidebarStatus) {
            const navNode = document.querySelector('.header') as HTMLElement
            navNode.style.maxWidth = '100%'
          }
        })
      },
      /**
       * @description: 侧边栏控制
       */
      handleSidebarStatus(boolean: boolean) {
        console.log(this.sidebarStatus)
        handleSidebar(boolean, () => {
          this.$store.commit('operate/handleSidebarStatus', boolean)
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
