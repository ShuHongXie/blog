<!--
 * @Author: shuhongxie
 * @Date: 2021-05-21 11:23:26
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-21 16:54:38
 * @FilePath: /nuxt-blog/components/Scissors.vue
-->
<template>
  <div class="scissors">
    <div class="scissors__line"></div>
    <i class="scissors__icon" :class="['iconfont iconhuojian', styles ? 'not_white' : '']"></i>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      styles: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    mounted() {},
    methods: {}
  })
</script>

<style lang="scss" scoped>
  @import '~assets/common/common.scss';
  .scissors {
    width: 100%;
    position: relative;
    cursor: pointer;
    margin: 20px 0;
    &:hover {
      i {
        left: 80%;
      }
    }
    &__line {
      border-bottom: 4px dashed $base_color;
    }
    &__icon {
      color: $base_color;
      height: 30px;
      font-size: 30px;
      position: absolute;
      bottom: 0;
      top: -13px;
      left: 6%;
      z-index: 10;
      transition: 1s;
      &.not_white {
        background-color: #fae8f6 !important;
      }
    }
  }
</style>
