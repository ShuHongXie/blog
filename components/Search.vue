<!--
 * @Author: shuhongxie
 * @Date: 2021-05-25 11:28:09
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 15:42:36
 * @FilePath: /nuxt-blog/components/Search.vue
-->
<template>
  <Overlay :visible="searchStatus">
    <div class="search" @click.stop="stopAll">
      <h3 class="search__title">Article Search</h3>
      <input
        v-model="searchText"
        class="search__input"
        type="text"
        placeholder="Search Something"
        @input="changeEvent"
      />
      <Scissors :styles="false" />
      <div class="search__content">
        <div v-if="searchList && searchList.list && searchList.list.length">
          <ul class="list">
            <li v-for="item in searchList.list" :key="item.id" class="list__item">
              <span class="list__item__link" @click="toOther(item)">
                {{ item.title }}
              </span>
            </li>
          </ul>
          <div class="search__pager">
            <Pagination
              :current-page="searchList.pageNum"
              :page-size="searchList.pageSize"
              :total="searchList.total"
              :turn-on="false"
              @change="change"
            />
          </div>
          <Scissors :styles="false" />
        </div>
        <div v-if="searchList && searchList.list && !searchList.list.length" class="search__empty">
          <p class="search__empty__text">没有找到相关文章...</p>
          <Scissors :styles="false" />
        </div>
        <i class="iconfont iconclose search__icon--close" @click="hide"></i>
      </div>
    </div>
  </Overlay>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState, mapMutations, mapActions } from 'vuex'
  import Overlay from './Overlay.vue'
  export default Vue.extend({
    components: { Overlay },
    data() {
      return {
        searchText: '',
        pageNum: 1,
        searchCont: ''
      }
    },
    computed: {
      ...mapState('operate', ['searchStatus']),
      ...mapState('search', ['searchList'])
    },
    mounted() {},
    methods: {
      ...mapMutations({
        hide: 'operate/handleSearchStatus',
        save: 'search/saveSearchList'
      }),
      toOther(item: any) {
        location.href = `/article/${item.link}`
        this.hide()
      },
      change({ pageNum }: { pageNum: number }) {
        console.log(pageNum)
        this.save({ ...this.searchList, pageNum })
        this.$store.dispatch('search/getSearchList', { key: this.searchText, pageNum })
      },
      close() {},
      changeEvent(e: Event) {
        const value = (e.target as HTMLInputElement).value
        if (value) {
          this.pageNum = 1
          this.searchText = value
          this.$store.dispatch('search/getSearchList', { key: value, pageNum: 1 })
        }
      },
      stopAll() {}
    }
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/common/common.scss';
  .search {
    position: fixed;
    z-index: 9999;
    width: 80%;
    margin-top: 10%;
    margin-left: -40%;
    left: 50%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px 20px;
    color: $base_color;
    transform: translateY(30px);
    top: 0;
    &__empty {
      &__text {
        margin: 30px 0;
      }
    }
    &__title {
      line-height: 44px;
    }
    &__input {
      width: 100%;
      height: 36px;
      border-radius: 24px;
      border: 2px solid $base_color;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 14px;
    }
    &__pager {
      padding: 0 10px;
      // display: flex;
      // justify-content: center;
    }
    &__icon--close {
      position: absolute;
      z-index: 999;
      right: 10px;
      top: 10px;
      font-size: 20px;
      color: $base_color;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        transform: rotate(360deg);
      }
    }
    &__content {
      .list {
        &__item {
          line-height: 30px;
          position: relative;
          &:hover {
            .list__item__link {
              color: $base_color;
            }
            &:before {
              border-color: $other_color;
            }
          }
          &:before {
            content: '';
            position: absolute;
            width: 6px;
            height: 6px;
            border: 4px solid $base_color;
            border-radius: 50%;
            left: 4px;
            top: 9px;
          }
          &__link {
            display: block;
            color: #000;
            font-size: 16px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-left: 34px;
          }
        }
      }
    }
  }
</style>
