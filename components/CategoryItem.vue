<!--
 * @Author: shuhongxie
 * @Date: 2021-05-25 17:20:12
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-02 10:59:40
 * @FilePath: /nuxt-blog/components/CategoryItem.vue
-->
<template>
  <ul>
    <li v-for="item in data" :key="item.id">
      <nuxt-link :to="`/categories/${item.name}/1`">{{ item.name }}</nuxt-link>
      <!-- <span>({{ item.count ? item.count : 0 }})</span> -->
      <category-item v-if="item.categorys" :data="item.categorys"></category-item>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {}
    },
    mounted() {
      console.log(this.data)
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';
  ul {
    li {
      min-height: 50px;
      line-height: 50px;
      position: relative;
      ul {
        padding-left: 40px;
      }
      &:hover {
        &:before {
          border-color: $other_color;
        }
      }
      &:before {
        position: absolute;
        left: -30px;
        top: 17px;
        content: '';
        width: 8px;
        height: 8px;
        border: 4px solid $base_color;
        border-radius: 50%;
        background-color: #fff;
        z-index: 2;
      }
      a {
        color: #000;
        font-size: 16px;
        margin-right: 10px;
        &:hover {
          color: $other_color;
          word-wrap: break-word;
        }
      }
      span {
        color: #99a9bf;
        font-size: 16px;
      }
    }
  }
</style>
