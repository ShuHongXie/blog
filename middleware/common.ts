/*
 * @Author: 谢树宏
 * @Date: 2021-06-03 10:47:20
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-07 14:38:08
 * @FilePath: /nuxt-blog/middleware/common.ts
 */
import { Middleware } from '@nuxt/types'

const common: Middleware = ({ store, route }) => {
  // store.dispatch('common/editArticlePage', route.name === 'article-link')
  store.commit('operate/handleSidebarStatus', route.name === 'article-link')
  store.commit('common/saveIsArticlePage', route.name === 'article-link')
}

export default common
