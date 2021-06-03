<!--
 * @Author: shuhongxie
 * @Date: 2021-05-24 19:45:50
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-02 19:42:54
 * @FilePath: /nuxt-blog/components/Pagination.vue
-->
<template>
  <div class="pagination">
    <span v-if="currentPage !== 1" class="pagination__prev" @click="jump('prev')">
      <i class="iconfont iconprevious"></i>
    </span>
    <span
      v-for="(item, index) in numberList"
      :key="index"
      :class="['pagination__number', currentPage === index + 1 ? 'pagination__number--active' : '']"
      @click="jump('', index + 1)"
    >
      {{ index + 1 }}
    </span>
    <span
      v-if="currentPage !== Math.floor(total / pageSize) + 1 && total / pageSize !== 1"
      class="pagination__next"
      @click="jump('next')"
    >
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
      },
      url: {
        type: String,
        default: ''
      },
      turnOn: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        numberList: [] as number[]
      }
    },
    watch: {
      total() {
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
      },
      /**
       * @description: 跳转
       * @param {*} action 动作
       * @return {*}
       */
      jump(action: string, pageNum: number) {
        if (action) {
          this.$emit('change', {
            pageNum: action === 'prev' ? this.currentPage - 1 : this.currentPage + 1
          })
        } else {
          this.$emit('change', { pageNum })
        }

        if (!this.turnOn) return
        switch (action) {
          case 'prev':
            location.href = `${this.url}/${this.currentPage - 1}`
            break
          case 'next':
            location.href = `${this.url}/${this.currentPage + 1}`
            break
          default:
            location.href = `${this.url}/${pageNum}`
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
    padding: 20px 0;
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
