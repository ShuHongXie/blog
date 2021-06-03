/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:21:21
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 14:38:06
 * @FilePath: /nuxt-blog/store/search.ts
 */
import config from '@/config'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
export const state = () => ({
  searchList: {}
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  saveSearchList(state, list) {
    state.searchList = list
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async getSearchList({ commit }, { key, pageNum }) {
    const res = await this.$axios.$post(
      `${config.domain}/search`,
      { key, pageNum },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    if (res.retCode === 200) {
      commit('saveSearchList', res.data)
    }
  }
}
