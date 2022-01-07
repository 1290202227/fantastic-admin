# 常见问题

## 替换真实的后端接口后，登录成功依旧在登录页

你需要对几处代码分别检查是否都有根据实际情况进行修改：

1. 在 `.env.development` 里修改真实接口请求地址
2. 因为真实接口返回的数据格式与框架演示提供的返回格式一定存在差异，所以需要在 `/src/api/index.js` 里修改响应拦截器里的代码，按照实际情况进行调整。例如什么状态下是请求成功，什么状态下是请求异常，并进行错误提示。
3. 在 `/src/store/modules/user.js` 里分别修改 `action` 下的 `login` 和 `mutations` 下的 `setUserData` ，确保接口可以请求成功，并将返回的用户信息存储到 store 中进行全局管理。最后还需要修改 `getters` 下的 `isLogin` ，这部分需要根据实际存储的用户信息去判断是否登录。例如框架演示登录是会返回 token 和失效时间，则验证是否登录也是通过这两个信息进行逻辑校验。

## 使用 `<script setup>` 语法糖如何设置组件 name

`<script setup>` 可以和普通的 `<script>` 一起使用，所以可以这样：

```vue:no-line-numbers
<script>
export default {
    name: 'componentName'
}
</script>

<script setup>
...
</script>
```

另外框架引用了 [vite-plugin-vue-setup-extend](https://github.com/anncwb/vite-plugin-vue-setup-extend) 依赖，所以可以更方便的设置。

```vue:no-line-numbers
<script setup name="componentName">
...
</script>
```

## 项目 URL 里的 # 号能不能去掉

这是因为路由默认使用的是 Hash 模式，你可以在 `/src/router/index.js` 修改为 HTML5 模式，但需要注意，开启 HTML5 模式，服务器也需要做相应的配置调整，详细请阅读《[Vue-router 不同的历史模式](https://next.router.vuejs.org/zh/guide/essentials/history-mode.html)》。

## 页面切换后显示空白

因为路由切换有使用到 `<transition>` 动画，而 `<transition>` 组件无法处理多个根节点的组件，所以请检查路由对应所有的页面文件的根节点是否均为单个。

错误示例：

```vue:no-line-numbers
<template>
    <!-- 需要注意，注释也会被视为一个节点 -->
    <h1>text h1</h1>
    <h2>text h2</h2>
</template>
```

正确示例：

```vue:no-line-numbers
<template>
    <div>
        <!-- 需要注意，注释也会被视为一个节点 -->
        <h1>text h1</h1>
        <h2>text h2</h2>
    </div>
</template>
```

相关 [Issue](https://github.com/vuejs/vue-next/issues/1850) 说明