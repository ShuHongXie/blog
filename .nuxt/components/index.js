import { wrapFunctional } from './utils'

export { default as CategoryItem } from '../../components/CategoryItem.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as Overlay } from '../../components/Overlay.vue'
export { default as Pagination } from '../../components/Pagination.vue'
export { default as Progress } from '../../components/Progress.vue'
export { default as Scissors } from '../../components/Scissors.vue'
export { default as Search } from '../../components/Search.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'
export { default as SidebarControl } from '../../components/SidebarControl.vue'
export { default as Snow } from '../../components/Snow.vue'
export { default as ToTop } from '../../components/ToTop.vue'

export const LazyCategoryItem = import('../../components/CategoryItem.vue' /* webpackChunkName: "components/category-item" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyOverlay = import('../../components/Overlay.vue' /* webpackChunkName: "components/overlay" */).then(c => wrapFunctional(c.default || c))
export const LazyPagination = import('../../components/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const LazyProgress = import('../../components/Progress.vue' /* webpackChunkName: "components/progress" */).then(c => wrapFunctional(c.default || c))
export const LazyScissors = import('../../components/Scissors.vue' /* webpackChunkName: "components/scissors" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../../components/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazySidebarControl = import('../../components/SidebarControl.vue' /* webpackChunkName: "components/sidebar-control" */).then(c => wrapFunctional(c.default || c))
export const LazySnow = import('../../components/Snow.vue' /* webpackChunkName: "components/snow" */).then(c => wrapFunctional(c.default || c))
export const LazyToTop = import('../../components/ToTop.vue' /* webpackChunkName: "components/to-top" */).then(c => wrapFunctional(c.default || c))
