<!--
 * @Author: shuhongxie
 * @Date: 2021-05-25 17:08:31
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-25 17:57:18
 * @FilePath: /nuxt-blog/pages/categories.vue
-->
<template>
  <div class="category">
    <div class="category__title">Categories - {{ count }}</div>
    <category-item :data="data"></category-item>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        count: '123',
        data: [
          {
            id: 1,
            count: 5,
            name: '分类1',
            categorys: [
              {
                id: 2,
                count: 10,
                name: '分类1-1'
              }
            ]
          },
          {
            id: 2,
            count: 5,
            name: '分类2'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .category {
    box-sizing: border-box;
    padding-left: 40px;
    overflow: hidden;
    margin: 0 20px;
    .category__title {
      padding: 20px 0;
      font-size: 36px;
      text-align: center;
    }
  }
</style>
