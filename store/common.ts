/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:21:21
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-04 15:56:15
 * @FilePath: /nuxt-blog/store/common.ts
 */
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import config from '@/config'

export const state = () => ({
  userInfo: null as any,
  pvCount: 0,
  uvCount: 0,
  isArticlePage: false
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
  saveIsArticlePage(state, boolean) {
    console.log(boolean)
    state.isArticlePage = boolean
  }
}
