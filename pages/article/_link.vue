<!--
 * @Author: shuhongxie
 * @Date: 2021-05-20 10:33:24
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 16:58:33
 * @FilePath: /nuxt-blog/pages/article/_link.vue
-->
<template>
  <div class="article">
    <div
      class="article__content md_box"
      v-html="marked(data.info.content.replace('/more', ''))"
    ></div>
    <div class="article__content article__copyright">
      <!-- <p>
        <span>Author:</span>
        <a href="mailto:undefined">{{ author }}</a>
      </p> -->
      <p>
        <span>Link:</span>
        <nuxt-link :to="`${config.localIp}/article/${link}`">
          {{ `http://xiesmallxie.cn/article/${link}` }}
        </nuxt-link>
      </p>
      <p>
        <span>Copyright Notice:</span>
        <span>
          All articles in this blog are licensed under
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
          unless stating additionally.
        </span>
      </p>
    </div>
    <div class="article__content article__other">
      <nuxt-link
        v-for="(item, index) in data.brothers"
        v-if="data.brothers[index]"
        :key="index"
        :to="`/article/${item.link}`"
      >
        <span>
          {{ (item && item.title) || '' }}
        </span>
      </nuxt-link>
      <div v-else></div>
    </div>
    <div id="gitalk-container" class="article__content"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import marked from 'marked'
  import hljs from 'highlight.js'
  import Gitalk from 'gitalk'
  // import fancyBox from 'vue-fancybox'
  import { mapMutations } from 'vuex'
  import { initCopyBtn } from '@/utils'
  import config from '@/config'
  import { str } from '../../str'
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
  interface imagePreviewObject {
    width: number
    height: number
    url: string
  }
  export default Vue.extend({
    transition: 'fat-tran',
    async asyncData({ $axios, params }) {
      const { link } = params
      const { data } = await $axios.$get(`${config.domain}/article/${encodeURIComponent(link)}`)

      return {
        data,
        link: data.info.link
      }
    },
    data() {
      return { str, imagePreview: [] as imagePreviewObject[], config, marked }
    },
    head() {
      return {
        title: `${this.$data.data.info.title} | 谢小谢のBlog`
      }
    },
    computed: {
      ohterArticle() {
        console.log(this.$data.data)

        const ohterArticle = [false, false]
        // return this.data && this.data.brothers.forE
        return ''
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
      //
      this.initFancyBox()
      // 初始化评论区
      const gitalk = new Gitalk({
        clientID: config.clientId,
        clientSecret: config.clientSecret,
        repo: 'MyBlog',
        owner: 'ShuHongXie',
        admin: ['ShuHongXie'],
        id: decodeURI(location.pathname), // Ensure uniqueness and length less than 50
        distractionFreeMode: false // Facebook-like distraction free mode
      })

      gitalk.render('gitalk-container')
      console.log(this)

      this.saveArticleInfo(this.$data.data)
    },
    methods: {
      ...mapMutations({
        saveArticleInfo: 'article/saveArticleInfo'
      }),
      initFancyBox() {
        const imageList = document.querySelectorAll('.article__content img') as NodeList
        imageList.forEach(image => {
          this.imagePreview.push({
            width: (image as HTMLImageElement).naturalWidth,
            height: (image as HTMLImageElement).naturalHeight,
            url: (image as HTMLImageElement).currentSrc
          })
        })
        for (let i = 0; i < imageList.length; i++) {
          imageList[i].addEventListener('click', e => {
            // fancyBox(e.target, this.imagePreview)
          })
        }
      }
    },
    // eslint-disable-next-line vue/order-in-components
    beforeRouteLeave(to, from, next) {
      this.saveArticleInfo(null)
      next()
    }
  })
</script>

<style lang="scss">
  @import '~/assets/common/highlight.scss';
  @import '~/assets/common/articlerender.scss';
  @import '~/assets/common/common.scss';
  @import '~/assets/common/gitalk.scss';

  .article {
    padding: 30px 0;
    &__content {
      color: #4c4948;
      a {
        color: #99a9bf;
        &:hover {
          text-decoration: underline;
        }
      }
      p,
      a {
        word-break: break-all;
        line-height: 28px;
        margin: 14px 0;
        font-size: 16px;
        code {
          background-color: rgba(27, 31, 35, 0.05);
        }
      }
      ul {
        li {
          line-height: 28px;
          padding: 2px 0;
          margin: 4px 0;
        }
      }
      h2 {
        line-height: 42px;
        margin: 4px 0;
        font-size: 22px;
      }
      h3 {
        line-height: 32px;
        margin: 4px 0;
        font-size: 18px;
      }
      pre {
        overflow: hidden;
        code {
          position: relative;
          display: block;
          overflow-x: auto;
          overflow-y: hidden;
          background: #f7f3f7;
          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
    &__copyright {
      padding: 0 14px;
      margin-top: 30px !important;
      border: 1px solid #99a9bf;
      transition: 0.3s;
      &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      }
      p {
        a {
          color: #99a9bf;
          text-decoration: underline;
          &:hover {
            color: $base_color;
            text-decoration: none;
          }
        }
        span {
          &:first-child {
            color: $base_color;
            font-weight: 700;
          }
        }
      }
    }
    &__other {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      a {
        position: relative;
        color: $base_color;
        text-decoration: underline;
        &:hover {
          color: $other_color;
          text-decoration: none;
          &::before,
          &::after {
            color: $other_color !important;
          }
        }
        &:first-child {
          &::before {
            font-family: 'iconfont';
            content: '\e678';
            position: absolute;
            color: $base_color;
            left: -14px;
            top: 0;
            height: 100%;
          }
        }
        &:last-child {
          &::before {
            font-family: 'iconfont';
            content: '\e67e';
            position: absolute;
            color: $base_color;
            right: -14px;
            top: 0;
            height: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    // 小于768时
    .article {
      &__content {
        margin: 0 30px;
        overflow: hidden;
      }
    }
  }
  @media screen and (min-width: 768px) {
    // 大于768时
    .article {
      width: 100%;
      position: relative;
      &__content {
        width: 700px;
        margin: 0 auto;
      }
    }
  }
  .page-header {
    color: #fff;
    background: #191818;
    margin: 0;
    padding: 10px 20px;
  }

  .editor-pane {
    position: fixed;
    top: 57px;
    left: 0;
    bottom: 0;
    width: 50%;
    height: auto;
    overflow: auto;
    box-shadow: -10px 2px 6px 10px rgba(0, 0, 0, 0.4);
  }

  .result-pane > div {
    position: fixed;
    top: 57px;
    right: 0;
    left: 50%;
    bottom: 0;
    overflow: auto;
    padding: 10px;
    padding-left: 20px;
    color: #444;
    font-family: Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif;
    font-size: 16px;
    line-height: 1.5em;
  }

  .editor textarea {
    padding: 20px;
  }

  .editor-pane textarea {
    min-height: 500px;
  }

  .markdown-controls {
    position: relative;
    z-index: 5;
    text-align: right;
    color: #fff;
    float: right;
  }

  .markdown-controls form {
    background-color: rgba(39, 40, 34, 0.5);
    margin-right: 20px;
  }

  .markdown-controls legend {
    border-bottom: 0;
    color: #fff;
    font-size: 1.25em;
    margin: 0;
    padding: 10px 0 0 0;
  }

  .CodeMirror {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;

    font-size: 16px;
  }

  pre {
    border: 1px solid #ccc;
  }

  blockquote {
    color: #666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em #eee solid;
  }

  tr {
    border-top: 1px solid #c6cbd1;
    background: #fff;
  }

  th,
  td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table tr:nth-child(2n) {
    background: #f6f8fa;
  }
</style>
