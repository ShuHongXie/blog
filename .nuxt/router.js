import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _af1053bc = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _84eaa8cc = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _5e487632 = () => interopDefault(import('../pages/tag/index.vue' /* webpackChunkName: "pages/tag/index" */))
const _6b3f17aa = () => interopDefault(import('../pages/archives/_pageNum.vue' /* webpackChunkName: "pages/archives/_pageNum" */))
const _e02bc2d6 = () => interopDefault(import('../pages/article/_link.vue' /* webpackChunkName: "pages/article/_link" */))
const _64895734 = () => interopDefault(import('../pages/user/_id/index.vue' /* webpackChunkName: "pages/user/_id/index" */))
const _3ff79672 = () => interopDefault(import('../pages/categories/_categoryName/_pageNum.vue' /* webpackChunkName: "pages/categories/_categoryName/_pageNum" */))
const _78e06b01 = () => interopDefault(import('../pages/tag/_tagName/_pageNum.vue' /* webpackChunkName: "pages/tag/_tagName/_pageNum" */))
const _6fa09e32 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _af1053bc,
    name: "about"
  }, {
    path: "/categories",
    component: _84eaa8cc,
    name: "categories"
  }, {
    path: "/tag",
    component: _5e487632,
    name: "tag"
  }, {
    path: "/archives/:pageNum?",
    component: _6b3f17aa,
    name: "archives-pageNum"
  }, {
    path: "/article/:link?",
    component: _e02bc2d6,
    name: "article-link"
  }, {
    path: "/user/:id",
    component: _64895734,
    name: "user-id"
  }, {
    path: "/categories/:categoryName/:pageNum?",
    component: _3ff79672,
    name: "categories-categoryName-pageNum"
  }, {
    path: "/tag/:tagName/:pageNum?",
    component: _78e06b01,
    name: "tag-tagName-pageNum"
  }, {
    path: "/",
    component: _6fa09e32,
    name: "index"
  }, {
    path: "/page/:pageNum",
    component: _6fa09e32
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
