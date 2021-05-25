/*
 * @Author: shuhongxie
 * @Date: 2021-05-25 15:16:38
 * @LastEditors: shuhongxie
 * @LastEditTime: 2021-05-25 17:06:59
 * @FilePath: /nuxt-blog/config/index.js
 */

const env = process.env.ENV

const domain = {
  development: 'http://127.0.0.1:7001',
  production: 'http://81.69.40.34:7001'
}
const localIp = {
  development: 'http://127.0.0.1:3000',
  production: 'http://81.69.40.34:3000'
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
