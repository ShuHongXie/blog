<!--
 * @Author: shuhongxie
 * @Date: 2021-05-20 17:23:24
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-25 14:53:44
 * @FilePath: /nuxt-blog/components/Header.vue
-->
<template>
  <header class="header" :class="['cf', inTop ? 'top' : 'not--top']">
    <a class="header__title" href="/">谢小谢のBlog</a>
    <transition name="fat-fade">
      <div :class="['header__nav', showNav ? 'show' : 'hide']">
        <nuxt-link
          v-for="(item, index) in navList"
          :key="item.title"
          :to="item.url"
          @click.native="e => search(index, e)"
        >
          <i :class="['iconfont', item.icon]"></i>
          <span>{{ item.title }}</span>
        </nuxt-link>
      </div>
    </transition>
    <i class="iconfont iconlist header__list--icon" @click="handleNav"></i>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState, mapMutations } from 'vuex'
  export default Vue.extend({
    data() {
      return {
        showNav: false,
        inTop: true,
        navList: [
          {
            title: 'Search ',
            icon: 'iconsousuo2',
            url: ''
          },
          {
            title: 'About ',
            icon: '',
            url: '/about'
          },
          {
            title: 'Archives ',
            icon: '',
            url: '/archives/1'
          },
          {
            title: 'Tag ',
            icon: '',
            url: '/tag'
          },
          {
            title: 'Categories ',
            icon: '',
            url: '/categories'
          }
        ]
      }
    },
    computed: {
      ...mapState('operate', ['sidebarStatus'])
    },
    mounted() {
      // 移动端屏幕下点击收缩导航
      document.body.addEventListener('click', e => this.handleHideNav(e), true)
      // pc下控制导航栏收缩
      window.addEventListener('scroll', this.handleNavBar)
    },
    beforeDestroy() {},
    methods: {
      ...mapMutations({
        show: 'operate/handleSearchStatus'
      }),
      handleNavBar() {
        const scrollH: number = document.documentElement.scrollTop || document.body.scrollTop
        const navNode = document.querySelector('.header') as HTMLElement
        if (scrollH > 0) {
          this.inTop = false
          if (this.sidebarStatus && document.body.clientWidth > 768) {
            navNode.style.maxWidth = 'calc( 100% - 300px )'
          } else {
            navNode.style.width = '100%'
          }
        } else {
          this.inTop = true
        }
      },
      handleHideNav(ev: Event) {
        if (!(ev.target as HTMLElement).dataset.current) {
          this.showNav = false
        }
      },
      handleNav() {
        this.showNav = !this.showNav
      },
      search(idx: number, e: Event) {
        console.log('点击了search')
        console.log(idx, e)
        if (!idx) {
          e.preventDefault()
          this.show()
        }
      }
    }
  })
</script>

<style lang="scss">
  @import '~/assets/common/common.scss';
  .header {
    width: 100%;
    position: absolute;
    height: 56px;
    line-height: 36px;
    padding: 10px 16px;
    box-sizing: border-box;
    z-index: 990;
    &__title {
      font-size: 18px;
      &:hover {
        color: $base_color;
      }
    }
    &__list--icon {
      float: right;
      font-size: 26px;
    }
    &__nav {
      a {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 3px;
          background-color: $base_color;
          transition: 0.3s;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      &__title {
        color: #000;
      }
      &.top {
        & > .header__nav {
          a {
            color: #000;
            &:hover {
              color: $base_color;
              i {
                color: $base_color;
              }
              &:before {
                width: 100%;
                background-color: #cf65b9;
              }
            }
          }
          i {
            color: #000;
          }
        }
        & > .header__title {
          color: #eee;
          &:hover {
            color: #fff;
          }
        }
      }
      &.not--top {
        position: fixed;
        & > .header__nav {
          opacity: 0;
          //background-color: rgba(255,255,255,0.6);
          a {
            color: #000;
            &:hover {
              color: $base_color;
              i {
                color: $base_color;
              }
              &:before {
                width: 100%;
                background-color: #cf65b9;
              }
            }
          }
        }
        .header__list--icon {
          color: #000;
          &:hover {
            color: $base_color;
          }
        }
      }
      &__nav {
        position: fixed;
        float: none;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -999;
        padding-top: 44px;
        background-color: none;
        &.show {
          // transition: 0.3s;
          opacity: 1 !important;
          transform: translateY(12px);
        }
        &.hide {
          // transition: 0.3s;
          opacity: 0;
          display: none;
          transform: translateY(0);
        }
        a {
          text-indent: 10px;
          display: block;
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
      &__list--icon {
        color: #eee;
        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .header {
      &.top {
        a {
          color: #eee;
          &:hover {
            color: #fff;
            &:before {
              width: 100%;
              background-color: #cf65b9;
            }
          }
        }
        i {
          color: #fff;
        }
        background-color: none;
      }
      &.not--top {
        position: fixed;
        a {
          color: #000 !important;
          &:hover {
            color: $base_color !important;
            &:before {
              width: 100%;
            }
          }
        }
        background-color: rgba(255, 255, 255, 0.5);
      }
      &__nav {
        float: right;
        & > a {
          margin: 0 5px;
          padding: 4px 0;
          i {
            padding-right: 2px;
          }
        }
      }
      &__list--icon {
        display: none;
      }
    }
  }
</style>
