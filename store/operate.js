/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:21:21
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-25 17:30:49
 * @FilePath: /nuxt-blog/store/operate.js
 */
export const state = () => ({
  // 侧边栏开关
  sidebarStatus: false,
  // 搜索栏开关
  searchStatus: false
})

export const mutations = {
  /**
   * @description: 侧边栏开关控制
   * @param {*} state
   * @return {*}
   */
  handleSidebarStatus(state) {
    state.sidebarStatus = !state.sidebarStatus
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
