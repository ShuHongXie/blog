/*
 * @Author: shuhongxie
 * @Date: 2021-05-25 15:16:38
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-07-05 13:41:29
 * @FilePath: /nuxt-blog/config/index.js
 */

const env = process.env.ENV

const domain = {
  development: 'http://127.0.0.1:7001',
  production: 'https://xiesmallxie.cn/blogApi'
}
const localIp = {
  development: 'http://127.0.0.1:3000',
  production: 'https://xiesmallxie.cn'
}
const clientId = {
  development: 'f07bea6150a039aacefb',
  production: '02eea76367fd18e94932'
}
const clientSecret = {
  development: 'ca03caf4a6d49d32475807aed74e98f37f126d71',
  production: 'd10100dd6c28ca41a6582a15a8b64f790daeebf1'
}

export default Object.freeze({
  domain: domain[env],
  localIp: localIp[env],
  clientId: clientId[env],
  clientSecret: clientSecret[env]
})
