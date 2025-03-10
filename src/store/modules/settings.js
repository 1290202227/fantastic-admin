import { defineStore } from 'pinia'
import { piniaStore } from '@/store'
import settings from '@/settings'

export const useSettingsStore = defineStore(
    // 唯一ID
    'settings',
    {
        state: () => ({
            ...settings,
            // 侧边栏是否收起（用于记录 pc 模式下最后的状态）
            sidebarCollapseLastStatus: settings.sidebarCollapse,
            // 显示模式，支持：mobile、pc
            mode: 'pc',
            // 页面标题
            title: ''
        }),
        actions: {
            // 设置访问模式
            setMode(width) {
                if (this.enableMobileAdaptation) {
                    // 先判断 UA 是否为移动端设备（手机&平板）
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        this.mode = 'mobile'
                    } else {
                        // 如果为桌面设备，再根据页面宽度判断是否需要切换为移动端展示
                        if (width < 992) {
                            this.mode = 'mobile'
                        } else {
                            this.mode = 'pc'
                        }
                    }
                } else {
                    this.mode = 'pc'
                }
            },
            // 设置网页标题
            setTitle(title) {
                this.title = title
            },
            // 切换侧边栏导航展开/收起
            toggleSidebarCollapse() {
                this.sidebarCollapse = !this.sidebarCollapse
                if (this.mode == 'pc') {
                    this.sidebarCollapseLastStatus = !this.sidebarCollapseLastStatus
                }
            },
            // 更新主题配置
            updateThemeSetting(data) {
                Object.assign(this, data)
            }
        }
    }
)

export function useSettingsOutsideStore() {
    return useSettingsStore(piniaStore)
}
