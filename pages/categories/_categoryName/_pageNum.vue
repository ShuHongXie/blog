<!--
 * @Author: 谢树宏
 * @Date: 2021-06-02 11:14:25
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 17:01:37
 * @FilePath: /nuxt-blog/pages/categories/_categoryName/_pageNum.vue
-->
<template>
  <div class="archives">
    <div class="archives__content">
      <div class="archives__title">Articles - {{ total }}</div>
      <Progress :data="list" />
      <Pagination
        :current-page="pageNum"
        :page-size="pageSize"
        :url="`/categories/${categoryName}`"
        :total="total"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import config from '@/config'
  export default {
    async asyncData({ params, error, $axios }) {
      try {
        const { categoryName, pageNum } = params
        const { data } = await $axios.$post(
          `${config.domain}/blog/categoriesDetail`,
          { categoryName, pageNum },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        return {
          ...data,
          categoryName
        }
      } catch (e) {
        error({ statusCode: e.statusCode })
      }
    },
    data() {
      return {}
    },
    head() {
      return {
        title: `Category: ${this.$data.categoryName} | 谢小谢のBlog`
      }
    },
    mounted() {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .archives {
    width: 100%;
    position: relative;
    padding: 30px 0;
    &__cont {
      padding: 30px 0;
      position: relative;
      z-index: 2;
    }
    &__title {
      padding: 20px 0;
      font-size: 36px;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    // 小于768时
    .archives {
      &__cont {
        margin: 0 30px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    // 大于768时
    .archives {
      width: 100%;
      position: relative;
      &__cont {
        width: 700px;
        margin: 0 auto;
      }
    }
  }
</style>
