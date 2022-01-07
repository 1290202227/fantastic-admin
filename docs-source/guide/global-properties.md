# 全局属性

全局属性在 `/src/util/global.properties.js` 文件中配置。

## 框架相关

### 接口请求

详细可阅读《[与服务端交互 - 接口请求](axios.md#接口请求)》。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$api
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$api
```
:::

::::

### 鉴权

详细可阅读《[权限 - 鉴权函数](permission.md#鉴权函数)》。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$auth
proxy.$authAll
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$auth
this.$authAll
```
:::

::::

### 标签栏 <Badge type="tip" text="专业版" vertical="top" />

详细可阅读《[标签栏 - 全局方法](tabbar.md#全局方法)》。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$tabbar
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$tabbar
```
:::

::::

### 主页最大化 <Badge type="tip" text="专业版" vertical="top" />

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
// status: true / false
proxy.$mainPageMaximize(status)
```
:::

::: code-group-item Options API
```js:no-line-numbers
// status: true / false
this.$mainPageMaximize(status)
```
:::

::::

## 第三方库

除 vue-router 、pinia 、axios 之外，框架还默认集成了一些常用且成熟的类库或插件，熟悉并熟练使用它们，能让你在开发过程中更得心应手。

### [dayjs](https://day.js.org/zh-CN/)

轻量的处理时间和日期的库。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$dayjs
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$dayjs
```
:::

::::

### [vue-cookies](https://github.com/cmp-cc/vue-cookies)

cookies 操作库。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$cookies
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$cookies
```
:::

::::

### [HotKey.js](https://wangchujiang.com/hotkeys/)

快捷键监听的库。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$hotkeys
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$hotkeys
```
:::

::::

### [vue3-clipboard](https://github.com/soerenmartius/vue3-clipboard) <Badge type="tip" text="专业版" vertical="top" />

剪贴板的库，可将数据拷贝到系统剪贴板中。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$clipboard
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$clipboard
```
:::

::::

### [QRCode](https://github.com/soldair/node-qrcode) <Badge type="tip" text="专业版" vertical="top" />

生成二维码的库，可生成图片或 canvas 二维码。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$qrcode
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$qrcode
```
:::

::::

### [mitt](https://github.com/developit/mitt)

全局事件总线的库，也是 Vue 3 官方推荐的。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$eventBus
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$eventBus
```
:::

::::

### [iNotify](https://github.com/jaywcjlove/iNotify) <Badge type="tip" text="专业版" vertical="top" />

支持 favicon、网页标题、Chrome桌面通知。

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const { proxy } = getCurrentInstance()
proxy.$iNotify
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$iNotify
```
:::

::::