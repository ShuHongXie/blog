<!--
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:04:27
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-02 14:58:26
 * @FilePath: /nuxt-blog/pages/tag.vue
-->
<template>
  <div class="tag">
    <div class="tag__warp">
      <div class="tag__title">Tag - {{ list.length }}</div>
      <div class="tag__item">
        <nuxt-link
          v-for="(item, index) in list"
          :key="index"
          class="tag__item--link"
          :to="`/tag/${item.name}/1`"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import config from '@/config'
  export default Vue.extend({
    transition: 'fat-tran',
    async asyncData({ $axios }) {
      const {
        data: { data }
      } = await $axios(`${config.domain}/blog/tags`)
      console.log(data)
      return data
    },
    data() {
      return {}
    },
    head() {
      return {
        title: 'Tag | 谢小谢のBlog'
      }
    },
    methods: {}
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';

  .tag {
    &__warp {
      text-align: center;
      padding: 100px 0;
      max-width: 700px;
      // overflow: hidden;
      margin: 0 auto;
      word-wrap: break-word;
    }
    &__title {
      padding: 30px 0;
      font-size: 36px;
    }
    &__item {
      &--link {
        padding: 0 10px;
        line-height: 48px;
        font-size: 30px;
        color: $base_color;
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: $other_color !important;
        }
        &:nth-child(1),
        &:nth-child(9),
        &:nth-child(3),
        &:nth-child(11),
        &:nth-child(14),
        &:nth-child(17) {
          font-size: 15px;
          color: #edb4e1;
        }
        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(6),
        &:nth-child(7) {
          font-size: 18px;
          color: #fcd2f3;
        }
        &:last-child {
          font-size: 12px;
          color: #fcd2f3;
        }
      }
    }
  }
</style>
