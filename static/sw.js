/*
 * @Author: 谢树宏
 * @Date: 2021-07-05 16:15:02
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-07-05 16:16:09
 * @FilePath: /nuxt-blog/static/sw.js
 */
// THIS FILE SHOULD NOT BE VERSION CONTROLLED

// https://github.com/NekR/self-destroying-sw

self.addEventListener('install', function (e) {
  self.skipWaiting()
})

self.addEventListener('activate', function (e) {
  self.registration
    .unregister()
    .then(function () {
      return self.clients.matchAll()
    })
    .then(function (clients) {
      clients.forEach(client => client.navigate(client.url))
    })
})
