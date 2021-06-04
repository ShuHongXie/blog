/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:21:21
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-04 15:57:39
 * @FilePath: /nuxt-blog/store/operate.ts
 */
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  // 侧边栏开关
  sidebarStatus: false,
  // 搜索栏开关
  searchStatus: false
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  /**
   * @description: 侧边栏开关控制
   * @param {*} state
   * @return {*}
   */
  handleSidebarStatus(state, boolean) {
    console.log('xxx')
    state.sidebarStatus = boolean
  },
  /**
   * @description: 搜索栏开关控制
   * @param {*} state
   * @return {*}
   */
  handleSearchStatus(state) {
    state.searchStatus = !state.searchStatus
  }
}
