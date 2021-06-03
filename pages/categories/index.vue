<!--
 * @Author: shuhongxie
 * @Date: 2021-05-25 17:08:31
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-02 11:06:12
 * @FilePath: /nuxt-blog/pages/categories.vue
-->
<template>
  <div class="category">
    <div class="category__title">Categories - {{ count }}</div>
    <category-item :data="list"></category-item>
  </div>
</template>

<script lang="ts">
  import config from '@/config'
  export default {
    transition: 'fat-tran',
    async asyncData({ $axios }) {
      const {
        data: { count, list }
      } = await $axios.$get(`${config.domain}/blog/categories`)
      return {
        list,
        count
      }
    },
    data() {
      return {}
    },
    head() {
      return {
        title: 'Categories | 谢小谢のBlog'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    box-sizing: border-box;
    overflow: hidden;
    margin: 0 20px;
    padding-left: 40px;
    padding: 30px 0 30px 40px;
    .category__title {
      padding: 20px 0;
      font-size: 36px;
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    // 大于768时
    .category {
      width: 700px;
      margin: 0 auto;
      position: relative;
      padding: 30px 30px 70px;
    }
  }
  @media screen and (max-width: 768px) {
    // 小于768时
    .category {
      margin: 0 50px;
    }
  }
</style>
