<!--
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:04:14
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-21 17:37:39
 * @FilePath: /nuxt-blog/components/SidebarControl.vue
-->
<!--
 * @Author: shuhongxie
 * @Date: 2021-05-21 11:23:26
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-21 16:54:38
 * @FilePath: /nuxt-blog/components/Scissors.vue
-->
<template>
  <i
    :class="['iconfont iconright show_sidebar_icon', sidebarStatus ? 'open' : '']"
    @click="handleSidebar"
  ></i>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'
  export default Vue.extend({
    data() {
      return {}
    },
    computed: {
      ...mapState({
        sidebarStatus: 'operate/sidebarStatus'
      })
    },
    methods: {
      handleSidebar() {}
    }
  })
</script>

<style lang="scss" scoped></style>
