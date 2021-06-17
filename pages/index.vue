<!--
 * @Author: shuhongxie
 * @Date: 2021-05-20 10:33:24
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-10 14:39:49
 * @FilePath: /nuxt-blog/pages/index.vue
-->
<template>
  <div class="index">
    <List :data="list" />
    <Pagination
      :current-page="pageNum"
      :page-size="pageSize"
      :total="total"
      :turn-on="false"
      @change="change"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // import fancyBox from 'vue-fancybox'
  import { initCopyBtn } from '@/utils'
  import lazy from '@/utils/lazy'
  import config from '@/config'
  interface imagePreviewObject {
    width: number
    height: number
    url: string
  }

  export default Vue.extend({
    mixins: [lazy],
    transition: 'fat-tran',
    async asyncData({ params, error, $axios, route }) {
      try {
        let { pageNum = 1 } = params
        pageNum = parseInt(pageNum as string)
        const { data } = await $axios.$get(`${config.domain}/article?pageNum=${pageNum}`)
        return {
          list: data.list,
          total: data.total,
          pageNum,
          pageSize: data.pageSize,
          currentPage: pageNum
        }
      } catch (e) {
        error({ statusCode: e.statusCode })
      }
    },
    data() {
      return {
        imagePreview: [] as imagePreviewObject[]
      }
    },
    mounted() {
      console.log(this)
      initCopyBtn()
      ;(this as any).initLazy('.article')
      // this.initFancyBox()
    },
    methods: {
      change({ pageNum }: { pageNum: number }) {
        location.href = pageNum === 1 ? '/' : `/page/${pageNum}`
      },
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
    }
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';

  .index {
    padding: 30px 0;
  }

  @media screen and (max-width: 768px) {
    // 小于768时
    .index {
      margin: 0 30px;
    }
  }
  @media screen and (min-width: 768px) {
    // 大于768时
    .index {
      width: 700px;
      margin: 0 auto;
    }
  }
</style>
