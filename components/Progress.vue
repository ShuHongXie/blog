<!--
 * @Author: shuhongxie
 * @Date: 2021-05-25 10:58:16
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 16:50:22
 * @FilePath: /nuxt-blog/components/Progress.vue
-->
<template>
  <div class="progress">
    <ul v-for="(item, index) in finalData" :key="index" class="progress__line">
      <li class="progress__line__year">{{ item[0].year }}</li>
      <li v-for="(items, index) in item" :key="index" class="progress__line__date">
        <span class="progress__line__time">{{ items.create_time }}</span>
        <nuxt-link class="progress__line__link" :to="`/article/${items.link}`">
          {{ items.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  interface lineObject {}
  export default Vue.extend({
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        finalData: [
          [
            {
              year: '2012',
              create_time: '2012-213213',
              link: '测试',
              title: '论猪肉'
            }
          ]
        ]
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const { data } = this
        let arr: string[] = []
        const finalData: Array<any>[] = []
        data.forEach((item: any) => {
          arr.push(item.year)
        })
        arr = Array.from(new Set(arr))
        arr.forEach((item: String, idx: number) => {
          finalData[idx] = []
          data.forEach((items: any) => {
            if (item === items.year) {
              finalData[idx].push(items)
            }
          })
        })
        this.finalData = finalData
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';
  .progress {
    box-sizing: border-box;
    padding-left: 40px;
    overflow: hidden;
    margin: 0 30px;
    &__line {
      &__year,
      &__date {
        min-height: 50px;
        line-height: 50px;
        position: relative;
        &:hover {
          .progress__line__link {
            color: $other_color;
            word-wrap: break-word;
          }
          &:before {
            border-color: $other_color;
          }
        }
        &:nth-child(1) {
          font-size: 18px;
          &:before {
            border-color: $other_color;
          }
        }
        &:before {
          position: absolute;
          left: -30px;
          top: 16px;
          content: '';
          width: 8px;
          height: 8px;
          border: 4px solid $base_color;
          border-radius: 50%;
          background-color: #fff;
          z-index: 2;
        }
        &:after {
          left: -23px;
          top: 20px;
          content: '';
          position: absolute;
          width: 2px;
          height: 100%;
          background-color: $base_color;
          z-index: 1;
        }
      }
      &__year {
        &:before {
          width: 12px;
          height: 12px;
          left: -32px;
        }
      }
      &__time {
        color: #99a9bf;
        font-size: 16px;
        margin-right: 10px;
        display: inline-block;
        min-width: 86px;
      }
      &__link {
        color: #000;
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    // 小于768时
  }
  @media screen and (min-width: 768px) {
    // 大于768时
    .progress {
      width: 700px;
      margin: 0 auto;
    }
  }
</style>
