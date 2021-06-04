import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  CategoryItem: () => import('../../components/CategoryItem.vue' /* webpackChunkName: "components/category-item" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  List: () => import('../../components/List.vue' /* webpackChunkName: "components/list" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Overlay: () => import('../../components/Overlay.vue' /* webpackChunkName: "components/overlay" */).then(c => wrapFunctional(c.default || c)),
  Pagination: () => import('../../components/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c)),
  Progress: () => import('../../components/Progress.vue' /* webpackChunkName: "components/progress" */).then(c => wrapFunctional(c.default || c)),
  Scissors: () => import('../../components/Scissors.vue' /* webpackChunkName: "components/scissors" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../../components/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  SidebarControl: () => import('../../components/SidebarControl.vue' /* webpackChunkName: "components/sidebar-control" */).then(c => wrapFunctional(c.default || c)),
  Snow: () => import('../../components/Snow.vue' /* webpackChunkName: "components/snow" */).then(c => wrapFunctional(c.default || c)),
  ToTop: () => import('../../components/ToTop.vue' /* webpackChunkName: "components/to-top" */).then(c => wrapFunctional(c.default || c)),
  Test: () => import('../../components/test.tsx' /* webpackChunkName: "components/test" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
