<template>
    <div>
        <page-main>
            <div>层级：1-1</div>
            <router-view v-slot="{ Component }">
                <keep-alive :include="keepAliveStore.list">
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </page-main>
    </div>
</template>

<script setup name="TabExampleNested2">
import { useKeepAliveStore } from '@/store/modules/keepAlive'
const keepAliveStore = useKeepAliveStore()
</script>
