/*
 * @Author: 谢树宏
 * @Date: 2021-06-03 10:47:20
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-03 16:50:41
 * @FilePath: /nuxt-blog/middleware/common.ts
 */
import { Middleware } from '@nuxt/types'

const common: Middleware = ({ store, route }) => {
  store.commit('common/saveIsArticlePage', route.name === 'article-link')
}

export default common
