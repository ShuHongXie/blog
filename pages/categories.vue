<!--
 * @Author: shuhongxie
 * @Date: 2021-05-25 17:08:31
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-26 10:31:23
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
    transition: 'fat-tran',
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
