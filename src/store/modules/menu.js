import { defineStore } from 'pinia'
import { piniaStore } from '@/store'
import path from 'path-browserify'
import { deepClone, resolveRoutePath } from '@/util'
import api from '@/api'

import { useSettingsStore } from './settings'
import { useUserStore } from './user'

function hasPermission(permissions, route) {
    let isAuth = false
    if (route.meta && route.meta.auth) {
        isAuth = permissions.some(auth => {
            if (typeof route.meta.auth == 'string') {
                return route.meta.auth === auth
            } else {
                return route.meta.auth.some(routeAuth => {
                    return routeAuth === auth
                })
            }
        })
    } else {
        isAuth = true
    }
    return isAuth
}

function filterAsyncRoutes(routes, permissions) {
    const res = []
    routes.forEach(route => {
        let tmpRoute = deepClone(route)
        if (hasPermission(permissions, tmpRoute)) {
            if (tmpRoute.children) {
                tmpRoute.children = filterAsyncRoutes(tmpRoute.children, permissions)
                tmpRoute.children.length && res.push(tmpRoute)
            } else {
                res.push(tmpRoute)
            }
        }
    })
    return res
}

function formatBackRoutes(routes, views = import.meta.glob('../../views/**/*.vue')) {
    return routes.map(route => {
        switch (route.component) {
            case 'Layout':
                route.component = () => import('@/layout/index.vue')
                break
            default:
                if (route.component) {
                    route.component = views[`../../views/${route.component}`]
                }
        }
        if (route.children) {
            route.children = formatBackRoutes(route.children, views)
        }
        return route
    })
}

// 将多层嵌套路由处理成平级
function flatAsyncRoutes(routes, breadcrumb, baseUrl = '') {
    let res = []
    routes.forEach(route => {
        if (route.children) {
            let childrenBaseUrl = ''
            if (baseUrl == '') {
                childrenBaseUrl = route.path
            } else if (route.path != '') {
                childrenBaseUrl = `${baseUrl}/${route.path}`
            }
            let childrenBreadcrumb = deepClone(breadcrumb)
            if (route.meta.breadcrumb !== false) {
                childrenBreadcrumb.push({
                    path: childrenBaseUrl,
                    title: route.meta.title
                })
            }
            let tmpRoute = deepClone(route)
            tmpRoute.path = childrenBaseUrl
            tmpRoute.meta.breadcrumbNeste = childrenBreadcrumb
            delete tmpRoute.children
            res.push(tmpRoute)
            let childrenRoutes = flatAsyncRoutes(route.children, childrenBreadcrumb, childrenBaseUrl)
            childrenRoutes.map(item => {
                // 如果 path 一样则覆盖，因为子路由的 path 可能设置为空，导致和父路由一样，直接注册会提示路由重复
                if (res.some(v => v.path == item.path)) {
                    res.forEach((v, i) => {
                        if (v.path == item.path) {
                            res[i] = item
                        }
                    })
                } else {
                    res.push(item)
                }
            })
        } else {
            let tmpRoute = deepClone(route)
            if (baseUrl != '') {
                if (tmpRoute.path != '') {
                    tmpRoute.path = `${baseUrl}/${tmpRoute.path}`
                } else {
                    tmpRoute.path = baseUrl
                }
            }
            // 处理面包屑导航
            let tmpBreadcrumb = deepClone(breadcrumb)
            if (tmpRoute.meta.breadcrumb !== false) {
                tmpBreadcrumb.push({
                    path: tmpRoute.path,
                    title: tmpRoute.meta.title
                })
            }
            tmpRoute.meta.breadcrumbNeste = tmpBreadcrumb
            res.push(tmpRoute)
        }
    })
    return res
}

function getDeepestPath(routes, rootPath = '') {
    let retnPath
    if (routes.children) {
        if (
            routes.children.some(item => {
                return item.meta.sidebar != false
            })
        ) {
            for (let i = 0; i < routes.children.length; i++) {
                if (routes.children[i].meta.sidebar != false) {
                    retnPath = getDeepestPath(routes.children[i], resolveRoutePath(rootPath, routes.path))
                    break
                }
            }
        } else {
            retnPath = getDeepestPath(routes.children[0], resolveRoutePath(rootPath, routes.path))
        }
    } else {
        retnPath = resolveRoutePath(rootPath, routes.path)
    }
    return retnPath
}

export const useMenuStore = defineStore(
    // 唯一ID
    'menu',
    {
        state: () => ({
            isGenerate: false,
            routes: [],
            defaultOpenedPaths: [],
            headerActived: 0,
            currentRemoveRoutes: []
        }),
        getters: {
            transformRoutes: state => {
                let routes
                const settingsStore = useSettingsStore()
                if (settingsStore.menuMode === 'single') {
                    routes = [{ children: [] }]
                    state.routes.map(item => {
                        routes[0].children.push(...item.children)
                    })
                } else {
                    routes = state.routes
                }
                return routes
            },
            sidebarRoutes() {
                return this.transformRoutes.length > 0 ? this.transformRoutes[this.headerActived].children : []
            },
            sidebarRoutesFirstDeepestPath() {
                return this.transformRoutes.length > 0 ? getDeepestPath(this.sidebarRoutes[0]) : '/'
            }
        },
        actions: {
            // 根据权限动态生成路由（前端生成）
            generateRoutesAtFront(asyncRoutes) {
                // eslint-disable-next-line no-async-promise-executor
                return new Promise(async resolve => {
                    const settingsStore = useSettingsStore()
                    const userStore = useUserStore()
                    let accessedRoutes
                    // 如果权限功能开启，则需要对路由数据进行筛选过滤
                    if (settingsStore.enablePermission) {
                        const permissions = await userStore.getPermissions()
                        accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions)
                    } else {
                        accessedRoutes = deepClone(asyncRoutes)
                    }
                    // 设置 routes 数据
                    this.isGenerate = true
                    let newRoutes = deepClone(accessedRoutes)
                    this.routes = newRoutes.filter(item => {
                        return item.children.length != 0
                    })
                    // 将三级及以上路由数据拍平成二级
                    let routes = []
                    accessedRoutes.map(item => {
                        routes.push(...item.children)
                    })
                    routes.map(item => {
                        if (item.children) {
                            item.children = flatAsyncRoutes(item.children, [{
                                path: item.path,
                                title: item.meta.title
                            }], item.path)
                        }
                    })
                    // 设置 defaultOpenedPaths 数据
                    let defaultOpenedPaths = []
                    routes.map(item => {
                        item.meta.defaultOpened && defaultOpenedPaths.push(item.path)
                        item.children && item.children.map(child => {
                            child.meta.defaultOpened && defaultOpenedPaths.push(path.resolve(item.path, child.path))
                        })
                    })
                    this.defaultOpenedPaths = defaultOpenedPaths
                    resolve(routes)
                })
            },
            // 生成路由（后端获取）
            generateRoutesAtBack() {
                return new Promise(resolve => {
                    api.get('route/list', {
                        baseURL: '/mock/'
                    }).then(async res => {
                        const settingsStore = useSettingsStore()
                        const userStore = useUserStore()
                        let asyncRoutes = formatBackRoutes(res.data)
                        let accessedRoutes
                        // 如果权限功能开启，则需要对路由数据进行筛选过滤
                        if (settingsStore.enablePermission) {
                            const permissions = await userStore.getPermissions()
                            accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions)
                        } else {
                            accessedRoutes = deepClone(asyncRoutes)
                        }
                        // 设置 routes 数据
                        this.isGenerate = true
                        let newRoutes = deepClone(accessedRoutes)
                        this.routes = newRoutes.filter(item => {
                            return item.children.length != 0
                        })
                        // 将三级及以上路由数据拍平成二级
                        let routes = []
                        accessedRoutes.map(item => {
                            routes.push(...item.children)
                        })
                        routes.map(item => {
                            if (item.children) {
                                item.children = flatAsyncRoutes(item.children, [{
                                    path: item.path,
                                    title: item.meta.title
                                }], item.path)
                            }
                        })
                        // 设置 defaultOpenedPaths 数据
                        let defaultOpenedPaths = []
                        routes.map(item => {
                            item.meta.defaultOpened && defaultOpenedPaths.push(item.path)
                            item.children && item.children.map(child => {
                                child.meta.defaultOpened && defaultOpenedPaths.push(path.resolve(item.path, child.path))
                            })
                        })
                        this.defaultOpenedPaths = defaultOpenedPaths
                        resolve(routes)
                    })
                })
            },
            invalidRoutes() {
                this.isGenerate = false
                this.routes = []
                this.defaultOpenedPaths = []
                this.headerActived = 0
            },
            // 根据路由判断属于哪个头部导航
            setHeaderActived(path) {
                this.routes.map((item, index) => {
                    if (
                        item.children.some(r => {
                            return path.indexOf(r.path + '/') === 0 || path == r.path
                        })
                    ) {
                        this.headerActived = index
                    }
                })
            },
            // 切换头部导航
            switchHeaderActived(index) {
                this.headerActived = index
            },
            // 记录 accessRoutes 路由，用于登出时删除路由
            setCurrentRemoveRoutes(routes) {
                this.currentRemoveRoutes = routes
            },
            // 清空动态路由
            removeRoutes() {
                this.currentRemoveRoutes.forEach(removeRoute => {
                    removeRoute()
                })
                this.currentRemoveRoutes = []
            }
        }
    }
)

export function useMenuOutsideStore() {
    return useMenuStore(piniaStore)
}
