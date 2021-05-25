<!--
 * @Author: shuhongxie
 * @Date: 2021-05-25 16:03:02
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-25 17:29:56
 * @FilePath: /nuxt-blog/layouts/error.vue
-->
<template>
  <div class="error">
    <span class="left_code">{{ error.statusCode }} {{ filterMessage(error.statusCode) }}</span>
    <nuxt-link to="/" class="right_code"><span>back home</span></nuxt-link>
    <div class="center_code">{{ error.statusCode }}</div>
  </div>
</template>

//
<script>
  import config from '@/config'
  export default {
    layout: 'errorLayout',
    props: {
      error: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        config,
        message: ''
      }
    },
    mounted() {
      console.log('jinru')

      console.log(this.config)
      console.log(this.message)
    },
    methods: {
      filterMessage(code) {
        switch (code) {
          case 404:
            return 'Not Found'
          case 500:
            return 'Server Error'
          case 400:
            return 'Param Error'
          default:
            return ''
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '~/assets/common/common.scss';
  #__nuxt,
  #__layout {
    height: 100%;
  }
  .error {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    background: linear-gradient(to right, $base_color 50%, #fff 50%);
    .center_code {
      text-align: center;
      height: 100%;
      font-size: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bolder;
      // background-image: -webkit-linear-gradient(to right, #FFF 50%,$base_color 50% );
      background-image: -webkit-linear-gradient(left, #fff 50%, $base_color 50%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .left_code,
    .right_code {
      position: absolute;
      top: 0;
      margin-top: 40px;
      font-size: 40px;
      color: #fff;
      font-weight: 100;
      width: 50%;
      line-height: 56px;
    }

    .left_code {
      left: 0;
    }

    .right_code {
      right: 0;
      color: #000;
      span {
        padding-left: 50px;
        position: relative;
        &::before {
          font-family: 'iconfont';
          content: '\e626';
          position: absolute;
          height: 100%;
          left: 0;
          top: 0;
          vertical-align: middle;
          font-size: 30px;
        }
        &:hover {
          color: $base_color;
          &::before {
            color: $base_color;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .error {
      .left_code,
      .right_code {
        margin-top: 40px;
        font-size: 20px;
        span {
          line-height: 28px;
          padding-left: 30px;
          &::before {
            font-size: 16px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    // 大于768时
    .error {
      width: 100%;
      position: relative;
    }
  }
  html,
  body {
    height: 100%;
  }
</style>
