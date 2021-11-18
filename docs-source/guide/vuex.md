# Vuex

Vuex 同样实现了自动注册，开发只需关注 `/src/store/modules/` 文件夹里的文件即可，同样也按模块区分文件。注意，需要开启命名空间，文件名即模块名。

例如新建一个 `example.js` 的文件：

```js:no-line-numbers
const state = () => ({})
const getters = {}
const actions = {}
const mutations = {}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
```

使用方法：

:::: code-group

::: code-group-item Composition API
```js:no-line-numbers
const store = useStore()

store.state.example.xxx;
store.getters['example/xxx'];
store.dispatch('example/xxx');
store.commit('example/xxx');
```
:::

::: code-group-item Options API
```js:no-line-numbers
this.$store.state.example.xxx;
this.$store.getters['example/xxx'];
this.$store.dispatch('example/xxx');
this.$store.commit('example/xxx');
```
:::

::::