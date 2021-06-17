/*
 * @Author: 谢树宏
 * @Date: 2021-06-10 15:09:13
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-17 16:27:02
 * @FilePath: /nuxt-blog/ecosystem.config.js
 */
module.exports = {
  apps: [
    {
      name: 'nuxt-blog',
      script: './node_modules/nuxt/bin/nuxt.js',
      env: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }
  ]
}
