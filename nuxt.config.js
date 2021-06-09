/*
 * @Author: shuhongxie
 * @Date: 2021-05-20 10:33:24
 * @LastEditors: 谢树宏
 * @LastEditTime: 2021-06-09 16:12:00
 * @FilePath: /nuxt-blog/nuxt.config.js
 */
export default {
  env: {
    ENV: process.env.ENV
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/page/:pageNum',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'My Dream is to be a music producer',
    meta: [
      { charset: 'utf-8' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'renderer', content: 'webkit' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover'
      },
      {
        name: 'keywords',
        coentent: '谢小谢のBlog, 前端开发, Vue相关, JS原理, 谢小谢, 谢小谢的博客, 前端, docker分享'
      },
      {
        name: 'description',
        content:
          '属于我谢小谢的博客，我会在里面分享前端开发，后台，服务器的相关知识，还会分享html,css,js,vue,webpack等原理文章等。'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_1096478_kp3hdrsolo.css'
      }
    ],
    script: [{ src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }]
  },
  loading: { color: '#3B8070' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/common/reset.scss',
    '@/assets/common/common.scss',
    '@/assets/common/transition.scss'
  ],

  layoutTransition: 'fat-fade',
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
