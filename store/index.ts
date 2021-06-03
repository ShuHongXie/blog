/*
 * @Author: 谢树宏
 * @Date: 2021-06-03 13:41:48
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 16:31:23
 * @FilePath: /nuxt-blog/store/index.ts
 */
/*
 * @Author: shuhongxie
 * @Date: 2021-05-21 17:21:21
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 11:58:16
 * @FilePath: /nuxt-blog/store/common.ts
 */
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import config from '@/config'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, { app: { $axios }, req }) {
    const { data } = await $axios.$get(`${config.domain}/common`)
    const visitCount = await $axios.$get(`${config.domain}/visitCount`)
    commit('common/saveUserInfo', data)
    commit('common/saveUserCount', visitCount.data)
  }
}
