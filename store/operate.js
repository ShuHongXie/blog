/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:21:21
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-21 17:38:39
 * @FilePath: /nuxt-blog/store/operate.js
 */
export const state = () => ({
  sidebarStatus: true
})

export const mutations = {
  // 侧边栏控制
  handleSidebarStatus(state, status) {
    state.sidebarStatus = status
  }
}
