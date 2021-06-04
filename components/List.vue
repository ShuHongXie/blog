<!--
 * @Author: 谢树宏
 * @Date: 2021-06-04 09:30:37
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-04 10:44:33
 * @FilePath: /nuxt-blog/components/List.vue
-->
<template>
  <div class="list">
    <div v-for="(item, index) in data" :key="index" class="list-article">
      <nuxt-link :to="`/article/${item.link}`" class="list-article__title">
        {{ item.title }}
      </nuxt-link>
      <div class="list-article__belong">
        <span class="list-article__belong__create">{{ item.create_time }}</span>
        <i v-if="item.category" class="sep">|</i>
        <div class="list-article__belong__category">
          <nuxt-link class="list-article__belong--link" :to="`/categories/${item.category.name}/1`">
            {{ item.category.name }}
          </nuxt-link>
        </div>
        <i v-if="item.tagsArticles.length !== 0" class="sep">|</i>
        <div class="list-article__belong__tag">
          <nuxt-link
            v-for="(items, indexs) in item.tagsArticles"
            :key="indexs"
            class="list-article__belong--link"
            :to="`/tag/${items.tags.name}/1`"
          >
            {{ items.tags.name }}
          </nuxt-link>
        </div>
      </div>
      <div
        class="md_box"
        v-html="
          marked(item.content ? item.content.substring(0, item.content.indexOf('/more')) : '')
        "
      ></div>
      <nuxt-link class="list-article__more" :to="`/article/${item.link}`">Read more</nuxt-link>
      <Scissors :styles="false" />
    </div>
  </div>
</template>

<script lang="ts">
  import marked from 'marked'
  import hljs from 'highlight.js'
  import { initCopyBtn } from '@/utils'

  import config from '@/config'
  marked.setOptions({
    highlight: (code: string) => hljs.highlightAuto(code).value,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    smartLists: true,
    xhtml: true,
    smartypants: false,
    sanitize: true
  })
  export default {
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        marked,
        config
      }
    },
    mounted() {
      // 初始化复制按钮
      initCopyBtn()
      // highlight.js代码区初始化
      const blocks = document.querySelectorAll('pre code') as NodeList
      blocks.forEach(block => {
        hljs.highlightBlock(block as HTMLElement)
      })
    },
    methods: {}
  }
</script>

<style lang="scss">
  @import '~/assets/common/common.scss';
  @import '~/assets/common/highlight.scss';
  @import '~/assets/common/articlerender.scss';
  .list {
    &-article {
      .sep {
        padding: 0 10px;
      }
      &__title {
        display: block;
        border-bottom: 1px solid #eee;
        color: #2e2e2e;
        text-decoration: none;
        font-size: 30px;
        line-height: 56px;
        cursor: pointer;
        margin-bottom: 6px;
        &:hover {
          color: $base_color;
          border-color: $base_color;
        }
      }
      &__belong {
        margin-bottom: 6px;
        line-height: 30px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
        color: #858585;
        font-size: 16px;
        &__create {
          padding-left: 20px;
          font-size: 16px;
          position: relative;
          &:before {
            font-family: 'iconfont';
            content: '\e6d2';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
          }
        }
        &__category,
        &__tag {
          display: flex;
          align-items: center;
          a {
            position: relative;
            padding: 0 20px;
            color: #99a9bf;
            text-decoration: underline;
            &:hover {
              color: $base_color;
              text-decoration: none;
            }
            &:before {
              font-family: 'iconfont';
              content: '\e703';
              position: absolute;
              left: 0;
              top: 0;
              color: #858585;
            }
            &:after {
              font-family: 'iconfont';
              content: '\e709';
              position: absolute;
              top: 0;
              right: 4px;
              height: 100%;
              color: #858585;
            }
            &:last-child {
              padding-right: 0;
              &:after {
                content: '';
              }
            }
          }
        }
        &__tag {
          a {
            padding-left: 20px;
            padding-right: 5px;

            &:before {
              content: '\e70f';
            }
            &:after {
              content: '';
            }
          }
        }
      }
      &__more {
        display: inline-block;
        padding: 0 12px;
        height: 32px;
        background: $base_color;
        color: #fff;
        text-align: center;
        text-decoration: none;
        line-height: 32px;
        cursor: pointer;
        margin: 20px 0;
        transition: all 0.3s;
        &:hover {
          background-color: $other_color;
        }
      }
    }
  }
</style>
