<!--
 * @Author: shuhongxie
 * @Date: 2021-05-24 19:45:50
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-25 10:17:40
 * @FilePath: /nuxt-blog/components/Pagination.vue
-->
<template>
  <div class="pagination">
    <span class="pagination__prev" @click="$emit('prev', currentPage)">
      <i class="iconfont iconprevious"></i>
    </span>
    <span
      v-for="(item, index) in numberList"
      :key="index"
      :class="['pagination__number', currentPage === index + 1 ? 'pagination__number--active' : '']"
      @click="$emit('current-change', index + 1)"
    >
      {{ index + 1 }}
    </span>
    <span class="pagination__next" @click="$emit('next', currentPage)">
      <i class="iconfont iconnext"></i>
    </span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      total: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 7
      },
      currentPage: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        numberList: [] as number[]
      }
    },
    watch: {
      total() {
        console.log('toatl变化')

        this.init()
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const length = Math.ceil(this.total / this.pageSize)
        this.numberList = []
        for (let i = 0; i < length; i++) {
          this.numberList.push(1)
        }
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';
  .pagination {
    display: flex;
    justify-content: center;
    &__number {
      display: inline-block;
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      color: #99a9bf;
      text-decoration: underline;
      margin: 0 2px;
      vertical-align: middle;
      cursor: pointer;
      &--active {
        background-color: $base_color;
        color: #fff;
        text-decoration: none;
      }
    }
    &__prev,
    &__next {
      @extend .pagination__number;
      text-decoration: none;
    }
  }
</style>
