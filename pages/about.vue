<!--
 * @Author: 谢树宏
 * @Date: 2021-06-02 15:24:47
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-02 16:51:38
 * @FilePath: /nuxt-blog/pages/about.vue
-->
<template>
  <div class="about">
    <div class="about__content" v-html="intro"></div>
  </div>
</template>

<script>
  import config from '@/config'
  export default {
    async asyncData({ $axios }) {
      const { data } = await $axios.$get(`${config.domain}/blog/aboutme`)

      return {
        intro: data.info.intro
      }
    },
    data() {
      return {}
    },
    head() {
      return {
        title: 'About | 谢小谢のBlog'
      }
    },
    mounted() {},
    methods: {}
  }
</script>

<style lang="scss">
  @import '~/assets/common/common.scss';
  .about {
    &__content {
      padding: 30px 0;
      min-height: 300px;
      h1,
      h3 {
        font-size: 26px;
        height: 56px;
        line-height: 56px;
        font-weight: bold;
        padding-left: 30px;
        position: relative;
        transition: 0.3s;
        cursor: pointer;
        &:before {
          position: absolute;
          content: '';
          width: 22px;
          height: 22px;
          background-image: url('/t1.png');
          background-size: cover;
          left: 0;
          top: 50%;
          margin-top: -11px;
          z-index: 2;
        }
        &:hover {
          padding-left: 34px;
          &:before {
            background-image: url('/t2.png');
          }
        }
      }
      p {
        line-height: 28px;
        padding: 2px 0;
        font-size: 14px;
      }
      h3 {
        font-size: 26px;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        margin-top: 10px;
        padding-left: 20px;
        &:before {
          width: 14px;
          height: 14px;
          margin-top: -7px;
        }
        &:hover {
          padding-left: 24px;
        }
      }
      ul {
        padding-left: 20px;
        li {
          line-height: 32px;
          font-size: 14px;
          padding-left: 24px;
          position: relative;
          cursor: pointer;
          a {
            color: $page_link_color;
            &:hover {
              color: $other_color;
            }
          }
          &:hover {
            &:before {
              background-color: $other_color;
            }
          }
          &:before {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: $base_color;
            left: 0;
            top: 15px;
            margin-top: -5px;
            border-radius: 50%;
          }
          &:after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: #fff;
            left: 2px;
            top: 12px;
            border-radius: 50%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    // 小于768时
    .about {
      &__content {
        margin: 0 30px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    // 大于768时
    .about {
      &__content {
        width: 700px;
        margin: 0 auto;
      }
    }
  }
</style>
