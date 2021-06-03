/*
 * @Author: 谢树宏
 * @Date: 2021-06-03 13:41:48
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 17:03:37
 * @FilePath: /nuxt-blog/store/article.ts
 */
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  // 文章信息
  articleInfo: null as any
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  saveArticleInfo(state, data) {
    state.articleInfo = data
  }
}
