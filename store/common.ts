/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:21:21
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-07 11:56:43
 * @FilePath: /nuxt-blog/store/common.ts
 */
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import config from '@/config'

export const state = () => ({
  userInfo: null as any,
  pvCount: 0,
  uvCount: 0,
  isArticlePage: false,
  articleReadPercent: 0 // 滚动幅度
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  /**
   * @description: 保存用户个人信息
   * @param {*} state
   * @param {*} data
   * @return {*}
   */
  saveUserInfo(state, data) {
    state.userInfo = data
  },
  /**
   * @description: 保存网页访问量信息
   * @param {*} state
   * @param {*} data
   * @return {*}
   */
  saveUserCount(state, data) {
    state.pvCount = data.count
    state.uvCount = data.uvCount
  },
  /**
   * @description: 判断是不是当前页面
   * @param {*} state
   * @param {*} boolean
   * @return {*}
   */
  saveIsArticlePage(state, boolean) {
    state.isArticlePage = boolean
  },
  /**
   * @description: 保存当前滚动百分比幅度
   * @param {*} state
   * @param {*} percent
   * @return {*}
   */
  saveArticleReadPercent(state, percent) {
    state.articleReadPercent = percent
  }
}
