<template>
    <div>
        <Alert />
        <page-header title="按钮" />
        <page-main title="基础用法" class="demo">
            <el-row>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </el-row>
            <el-row>
                <el-button plain>朴素按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
                <el-button type="success" plain>成功按钮</el-button>
                <el-button type="info" plain>信息按钮</el-button>
                <el-button type="warning" plain>警告按钮</el-button>
                <el-button type="danger" plain>危险按钮</el-button>
            </el-row>
            <el-row>
                <el-button round>圆角按钮</el-button>
                <el-button type="primary" round>主要按钮</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
            </el-row>
            <el-row>
                <el-button :icon="Search" circle />
                <el-button type="primary" :icon="Edit" circle />
                <el-button type="success" :icon="Check" circle />
                <el-button type="info" :icon="Message" circle />
                <el-button type="warning" :icon="Star" circle />
                <el-button type="danger" :icon="Delete" circle />
            </el-row>
        </page-main>
        <page-main title="禁用状态" class="demo">
            <el-row>
                <el-button disabled>默认按钮</el-button>
                <el-button type="primary" disabled>主要按钮</el-button>
                <el-button type="success" disabled>成功按钮</el-button>
                <el-button type="info" disabled>信息按钮</el-button>
                <el-button type="warning" disabled>警告按钮</el-button>
                <el-button type="danger" disabled>危险按钮</el-button>
            </el-row>
            <el-row>
                <el-button plain disabled>朴素按钮</el-button>
                <el-button type="primary" plain disabled>主要按钮</el-button>
                <el-button type="success" plain disabled>成功按钮</el-button>
                <el-button type="info" plain disabled>信息按钮</el-button>
                <el-button type="warning" plain disabled>警告按钮</el-button>
                <el-button type="danger" plain disabled>危险按钮</el-button>
            </el-row>
        </page-main>
        <page-main title="文字按钮" class="demo">
            <el-button type="text">文字按钮</el-button>
            <el-button type="text" disabled>文字按钮</el-button>
        </page-main>
        <page-main title="图标按钮" class="demo">
            <el-button type="primary" :icon="Edit" />
            <el-button type="primary" :icon="Share" />
            <el-button type="primary" :icon="Delete" />
            <el-button type="primary" :icon="Search">搜索</el-button>
            <el-button type="primary">
                上传
                <el-icon class="el-icon--right"><el-icon-upload /></el-icon>
            </el-button>
        </page-main>
        <page-main title="按钮组" class="demo">
            <el-button-group style="margin-right: 10px;">
                <el-button type="primary" :icon="ArrowLeft">上一页</el-button>
                <el-button type="primary">下一页<el-icon class="el-icon--right"><el-icon-arrow-right /></el-icon></el-button>
            </el-button-group>
            <el-button-group>
                <el-button type="primary" :icon="Edit" />
                <el-button type="primary" :icon="Share" />
                <el-button type="primary" :icon="Delete" />
            </el-button-group>
        </page-main>
        <page-main title="加载中" class="demo">
            <el-button type="primary" :loading="true">加载中</el-button>
        </page-main>
        <page-main title="不同尺寸" class="demo">
            <div style="margin-bottom: 10px;">
                <el-button size="large">大号按钮</el-button>
                <el-button size="default">默认按钮</el-button>
                <el-button size="small">小号按钮</el-button>
            </div>
            <div>
                <el-button size="large" round>大号按钮</el-button>
                <el-button size="default" round>默认按钮</el-button>
                <el-button size="small" round>小号按钮</el-button>
            </div>
        </page-main>
    </div>
</template>

<script setup>
import Alert from './components/alert.vue'
import { Search, Edit, Check, Message, Star, Delete, Share, ArrowLeft } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.demo {
    .el-row {
        margin-bottom: 20px;
    }
}
</style>
