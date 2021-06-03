/* eslint-disable vue/order-in-components */
<!--
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:04:27
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 16:47:45
 * @FilePath: /nuxt-blog/components/Nav.vue
-->
<template>
  <nav class="banner">
    <transition name="fat-fade">
      <div v-if="!isArticlePage" class="banner__intro">
        <h1>谢小谢のBlog</h1>
        <h3>My dream is to be a music producer.</h3>
        <div class="banner__link">
          <a href="https://github.com/ShuHongXie">
            <i class="iconfont icontwitter"></i>
          </a>
          <a href="https://github.com/ShuHongXie">
            <i class="iconfont icongithub"></i>
          </a>
          <a to="javascript:;" @click="show">
            <i class="iconfont iconsearch"></i>
          </a>
        </div>
      </div>
      <div v-else class="banner__article">
        <div v-if="articleInfo">
          <h1>{{ articleInfo.info.title }}</h1>
          <div class="banner__article--belong">
            <span class="time">{{ articleInfo.info.create_time }}</span>
            |
            <nuxt-link
              v-for="item in articleInfo.category"
              :key="item.id"
              :to="`/categories/${item.name}/1`"
              class="category"
            >
              {{ item.name }}
            </nuxt-link>
          </div>
          <div class="banner__article__intro">
            <span>Word count: {{ articleInfo.info.content.length }}</span>
            |
            <span>Reading time: {{ Math.floor(articleInfo.info.content.length / 700) }} min</span>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState, mapMutations } from 'vuex'
  export default Vue.extend({
    data() {
      return {
        category: [
          {
            id: 1,
            name: '自由'
          }
        ],
        isArticle: false
      }
    },
    computed: {
      ...mapState('article', ['articleInfo']),
      ...mapState('common', ['isArticlePage'])
    },
    created() {
      this.isArticle = this.$route.matched[0].name === 'article-link'
      console.log(this.isArticle)
    },
    methods: {
      ...mapMutations({
        show: 'operate/handleSearchStatus'
      })
    }
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';
  .banner {
    height: 152px;
    padding: 200px 20px;
    background-image: url('/f1.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    &__intro,
    &__article {
      position: relative;
      z-index: 2;
      h1 {
        font-weight: 700;
        font-size: 30px;
        line-height: 50px;
        color: #eee;
        &:hover {
          color: #fff;
        }
      }
      h3 {
        font-weight: 300;
        font-size: 20px;
        line-height: 30px;
        color: #eee;
        &:hover {
          color: #fff;
        }
      }
      &--belong,
      &__intro {
        color: #eee;
        line-height: 30px;
        text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
        span,
        a {
          position: relative;
          font-size: 16px;
          color: #eee;
          &:hover {
            color: #fff;
          }
        }
        .time {
          padding-left: 20px;
          &:before {
            font-family: 'iconfont';
            content: '\e6d2';
            position: absolute;
            left: 0;
            top: -4px;
            height: 100%;
          }
        }
        .category {
          padding: 0 20px;
          &:before {
            font-family: 'iconfont';
            content: '\e703';
            position: absolute;
            left: 0;
            top: -4px;
          }
          &:after {
            font-family: 'iconfont';
            content: '\e709';
            position: absolute;
            top: -4px;
            right: 4px;
            height: 100%;
          }
          &:last-child {
            &:after {
              content: '';
            }
          }
        }
      }
    }
    &__link {
      padding: 10px 0;
      position: relative;
      z-index: 2;
      i {
        color: #eee;
        font-size: 30px;
        &:hover {
          color: #fff;
        }
      }
      a:nth-child(2) {
        i {
          padding: 0 10px;
        }
      }
    }
    .article_box {
      position: relative;
      z-index: 2;
      h1 {
        font-size: 36px;
      }
      div {
        color: #eee;
        line-height: 30px;
        text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
        span,
        a {
          position: relative;
          font-size: 16px;
          color: #eee;
          &:hover {
            color: #fff;
          }
        }
        .time {
          padding-left: 20px;
          &:before {
            font-family: 'iconfont';
            content: '\e6d2';
            position: absolute;
            left: 0;
            top: -4px;
            height: 100%;
          }
        }
        .category {
          padding: 0 20px;
          &:before {
            font-family: 'iconfont';
            content: '\e703';
            position: absolute;
            left: 0;
            top: -4px;
          }
          &:after {
            font-family: 'iconfont';
            content: '\e709';
            position: absolute;
            top: -4px;
            right: 4px;
            height: 100%;
          }
          &:last-child {
            &:after {
              content: '';
            }
          }
        }
      }
    }
  }
</style>
