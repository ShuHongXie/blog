import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _48298257 = () => interopDefault(import('../pages/categories.vue' /* webpackChunkName: "pages/categories" */))
const _d94dc222 = () => interopDefault(import('../pages/tag.vue' /* webpackChunkName: "pages/tag" */))
const _64895734 = () => interopDefault(import('../pages/user/_id/index.vue' /* webpackChunkName: "pages/user/_id/index" */))
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
    path: "/categories",
    component: _48298257,
    name: "categories"
  }, {
    path: "/tag",
    component: _d94dc222,
    name: "tag"
  }, {
    path: "/user/:id",
    component: _64895734,
    name: "user-id"
  }, {
    path: "/",
    component: _6fa09e32,
    name: "index"
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
