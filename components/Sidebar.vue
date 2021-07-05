<!--
 * @Author: shuhongxie
 * @Date: 2021-05-20 17:23:24
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-07-01 16:16:04
 * @FilePath: /nuxt-blog/components/Sidebar.vue
-->
<template>
  <transition name="fat-popup-slide-left">
    <div v-show="sidebarStatus" class="sidebar">
      <div class="sidebar__header">
        <div v-if="isArticlePage" class="sidebar__header--toggle" @click="toggle">
          {{ toggleText }}
        </div>
        <Scissors v-if="isArticlePage" :style="scissorsStyle" />
      </div>
      <div class="sidebar__warp">
        <transition-group v-if="isArticlePage" mode="out-in" name="fat-popup-slide-left">
          <div v-if="toggleStatus" key="1" class="user">
            <div class="user__avatar">
              <img
                :src="userInfo.info.avatar ? `${config.domain}${userInfo.info.avatar}` : ''"
                alt="avator"
              />
            </div>
            <p class="user__name">{{ userInfo.info.name }}</p>
            <p class="user__title">{{ userInfo.info.title }}</p>
            <a :href="userInfo.info.follow" class="user__follow">Follow Me</a>
            <Scissors :style="scissorsStyle" />
            <div class="user__item">
              <nuxt-link class="user__item--link" tag="div" to="/archives/1">
                Articles
                <span>{{ userInfo.articleCount }}</span>
              </nuxt-link>
              <nuxt-link class="user__item--link" tag="div" to="/tag">
                Tags
                <span>{{ userInfo.tagCount }}</span>
              </nuxt-link>
              <nuxt-link class="user__item--link" tag="div" to="/categories">
                Categories
                <span>{{ userInfo.categoryCount }}</span>
              </nuxt-link>
            </div>
            <Scissors :style="scissorsStyle" />
            <p class="user__links">Links</p>
            <div class="user__otherlinks">
              <a :href="userInfo.info.follow">ShuHongXie</a>
            </div>
          </div>
          <div v-else key="2" class="catalog">
            <span class="catalog__title">Catalog</span>
            <div class="catalog__progress">You've read {{ articleReadPercent }}%</div>
            <Navbar
              v-if="articleInfo"
              class-name="article-menu"
              :source="articleInfo.info.content"
              :heading-top-offset="0"
            />
          </div>
        </transition-group>
        <div v-else class="user">
          <div class="user__avatar">
            <img
              :src="userInfo.info.avatar ? `${config.domain}${userInfo.info.avatar}` : ''"
              alt="avator"
            />
          </div>
          <p class="user__name">{{ userInfo.info.name }}</p>
          <p class="user__title">{{ userInfo.info.title }}</p>
          <a :href="userInfo.info.follow" class="user__follow">Follow Me</a>
          <Scissors :style="scissorsStyle" />
          <div class="user__item">
            <nuxt-link class="user__item--link" tag="div" to="/archives/1">
              Articles
              <span>{{ userInfo.articleCount }}</span>
            </nuxt-link>
            <nuxt-link class="user__item--link" tag="div" to="/tag">
              Tags
              <span>{{ userInfo.tagCount }}</span>
            </nuxt-link>
            <nuxt-link class="user__item--link" tag="div" to="/categories">
              Categories
              <span>{{ userInfo.categoryCount }}</span>
            </nuxt-link>
          </div>
          <Scissors :style="scissorsStyle" />
          <p class="user__links">Links</p>
          <div class="user__otherlinks">
            <a :href="userInfo.info.follow">ShuHongXie</a>
          </div>
        </div>
      </div>

      <!-- <transition name="fat-popup-slide-left">
        <div v-if="!toggleStatus" class="catalog">
          <span>Catalog</span>
          <div class="progress">
            You've read {{ writePercent }}%
            <div></div>
          </div>
        </div>
      </transition> -->
    </div>
  </transition>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import config from '@/config'

  export default Vue.extend({
    data() {
      return {
        scissorsStyle: {
          // 剪刀组件的样式
          backgroundColor: '#fae8f6!important'
        },
        toggleStatus: false,
        toggleText: 'Toggle article',
        writePercent: 0,
        localto: '',
        config
      }
    },
    computed: {
      ...mapState('operate', ['sidebarStatus']),
      ...mapState('common', ['userInfo', 'isArticlePage', 'articleReadPercent']),
      ...mapState('article', ['articleInfo'])
    },
    mounted() {},
    methods: {
      toggle() {
        this.toggleStatus = !this.toggleStatus
      }
    }
  })
</script>

<style lang="scss">
  @import '~/assets/common/common.scss';
  .button--toggle {
    width: 120px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background-color: $base_color;
    box-sizing: border-box;
    padding: 0 10px;
    color: #fff;
    font-size: 14px;
    margin: 0 auto;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: $other_color;
    }
  }
  .sidebar {
    width: 300px;
    height: 100%;
    background-color: #fae8f6;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 898;
    transition: all 0.3s;
    box-sizing: border-box;
    padding: 20px 10px 10px 10px;
    overflow: hidden;
    &__header {
      &--toggle {
        @extend .button--toggle;
      }
    }
    &__warp {
      position: relative;
      .user {
        text-align: center;
        position: absolute;
        width: 280px;
        &__follow {
          display: block;
          @extend .button--toggle;
        }
        &__avatar {
          width: 100px;
          height: 100px;
          padding: 4px;
          box-sizing: border-box;
          border: 1px solid #a3afc0;
          margin: 0 auto;
          img {
            width: 90px;
            height: 90px;
          }
        }
        &__name {
          font-size: 16px;
          color: #000;
          height: 32px;
          line-height: 32px;
        }
        &__title {
          font-size: 14px;
          color: #99a9bf;
          height: 28px;
          line-height: 28px;
          margin-bottom: 10px;
        }
        &__item {
          padding: 8px 0;
          &--link {
            text-align: left;
            padding-left: 10px;
            height: 36px;
            line-height: 36px;
            color: #fff;
            background-color: $base_color;
            font-size: 14px;
            position: relative;
            margin-bottom: 8px;
            cursor: pointer;
            &:hover {
              background-color: $other_color;
            }
            span {
              position: absolute;
              width: 50px;
              height: 36px;
              line-height: 36px;
              background-color: #fff;
              top: 0;
              right: 0;
              color: $base_color;
              text-align: center;
              font-size: 16px;
            }
            &:before {
              content: '';
              width: 0;
              height: 0;
              position: absolute;
              top: 0;
              right: 50px;
              border-top: 18px solid transparent;
              border-bottom: 18px solid transparent;
              border-right: 18px solid #fff;
            }
          }
        }
        &__links {
          line-height: 32px;
          font-size: 16px;
          text-align: center;
        }
        &__otherlinks {
          display: flex;
          a {
            font-size: 14px;
            height: 26px;
            line-height: 26px;
            background-color: $base_color;
            color: #fff;
            margin-right: 10px;
            padding: 0 10px 0 18px;
            position: relative;
            margin-top: 10px;
            &:hover {
              background-color: $other_color;
            }
            &:before {
              content: '';
              width: 8px;
              height: 8px;
              background-color: #fff;
              position: absolute;
              left: 5px;
              top: 9px;
              border-radius: 50%;
            }
          }
        }
      }
      .catalog {
        position: absolute;
        width: 280px;
        text-align: center;
        &__title {
          line-height: 30px;
          font-size: 16px;
        }
        &__progress {
          text-align: left;
          height: 30px;
          line-height: 30px;
          position: relative;
          color: $other_color;
          margin-top: 10px;
          margin-left: 10px;
          div {
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: $other_color;
          }
        }
        & > ol {
          padding-left: 10px;
          text-align: left;
          font-size: 14px;
          li {
            line-height: 28px;
            color: #a3afc0;
            &.active {
              background-color: $other_color;
              color: #fff;
            }
            span {
              &.active {
                background-color: $other_color;
                color: #fff;
              }
            }
            ol {
              margin-left: 10px;
              li {
                padding-left: 10px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    // 小于768时
    .sidebar {
      display: none;
    }
  }
</style>
