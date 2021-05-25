<!--
 * @Author: shuhongxie
 * @Date: 2021-05-25 14:01:24
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-25 14:38:10
 * @FilePath: /nuxt-blog/components/Overlay.vue
-->
<template>
  <transition name="fat-fade">
    <div v-show="visible" class="overlay" @click.stop="hide">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Vue from 'vue'
  import { mapMutations } from 'vuex'
  export default Vue.extend({
    props: {
      // 控制显隐
      visible: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {
      ...mapMutations({
        hide: 'operate/handleSearchStatus'
      })
    }
  })
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    z-index: 9998;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
