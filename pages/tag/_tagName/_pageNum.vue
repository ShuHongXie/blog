<!--
 * @Author: 谢树宏
 * @Date: 2021-06-02 15:04:42
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 17:35:27
 * @FilePath: /nuxt-blog/pages/tag/_tagName/_pageNum.vue
-->
<template>
  <div class="archives">
    <div class="archives__content">
      <div class="archives__title">{{ tagName }} - {{ total }}</div>
      <Progress :data="list" />
      <Pagination
        :current-page="pageNum"
        :page-size="pageSize"
        :url="`/tag/${tagName}`"
        :total="total"
      />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import config from '@/config'
  export default Vue.extend({
    transition: 'fat-tran',
    async asyncData({ params, error, $axios }) {
      console.log(params)
      try {
        const { pageNum, tagName } = params
        const { data } = await $axios.$post(
          `${config.domain}/tag`,
          `name=${tagName}&pageNum=${pageNum}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          }
        )
        return {
          ...data,
          tagName
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
        title: `Tag: ${this.$data.tagName} | 谢小谢のBlog`
      }
    },
    mounted() {},
    methods: {}
  })
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
