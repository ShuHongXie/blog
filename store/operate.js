/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:21:21
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-24 11:34:54
 * @FilePath: /nuxt-blog/store/operate.js
 */
export const state = () => ({
  // 侧边栏开关
  sidebarStatus: false
})

export const mutations = {
  /**
   * @description: 侧边栏开关控制
   * @param {*} state
   * @return {*}
   */
  handleSidebarStatus(state) {
    state.sidebarStatus = !state.sidebarStatus
  }
}
