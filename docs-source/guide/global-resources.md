# 全局资源

## SVG 图标

越来越多项目开始使用 SVG 图标来代替精灵图或者字体图标，本框架也提供了 SVG 图标支持，你有三种使用方式。

### Element Plus 图标

:::warning 警告
从 1.2.0-beta.1 开始，Element Plus 已不再支持 Font Icon ，而全面使用 SVG Icon 。
:::

框架已默认将 Element Plus 图标注册到全局，并且增加了 `el-icon-` 前缀避免组件名冲突。你可以通过以下方式直接在页面中使用。

```vue:no-line-numbers
<el-icon>
    <el-icon-search />
</el-icon>
```

全局注册会影响项目构建体积和加载速度，如果你希望图标是按需引入并使用，你可以删除 `/src/main.js` 里这段代码：

```js:no-line-numbers
import * as ElementIcons from '@element-plus/icons'
// 将 element-plus 的图标库注册到全局
for (var key in ElementIcons) {
    app.component(`ElIcon${ElementIcons[key].name}`, ElementIcons[key])
}
```

然后在需要使用到的地方手动引入：

```vue:no-line-numbers
<el-icon>
    <Search />
</el-icon>

<script setup>
import { Search } from '@element-plus/icons'
</script>
```

### 自定义图标

你可以在框架中使用自定义的 SVG 图标文件，推荐去[阿里巴巴矢量图标库](https://www.iconfont.cn/)下载高质量 SVG 图标文件。

使用 SVG 图标文件也很简单，首先将 svg 文件放到 `/src/assets/icons/` 目录下，然后在页面中就可以通过 `<svg-icon />` 组件使用了，name 就是 svg 文件名，如下：

```vue:no-line-numbers
<!-- <svg-icon> 组件无需手动注册即可使用 -->
<svg-icon name="example" />
```

### Iconify 图标 <Badge type="tip" text="专业版" vertical="top" />

:::tip 介绍
[Iconify](https://github.com/iconify/iconify) 提供 100+ 套图标集，100,000+ 个图标可以免费使用。借助 [unplugin-icons](https://github.com/antfu/unplugin-icons) 提供的能力，你可以在框架中轻松使用这些图标，而无需担心构建体积和加载速度，因为它们都是按需构建、按需加载的。
:::

你可以在 [Icônes](https://icones.js.org/) 上查找你想要的图标（这是一个基于 Iconify 的在线图标搜索网站），或者也可以在 vscode 里安装 [Icônes](https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones) 扩展。

<p><img :src="$withBase('/icones1.png')" /></p>

<p><img :src="$withBase('/icones2.png')" /></p>

当你需要用到某个图标的时候，你可以通过 `<i-{集合名}-{图标名} />` 的方式去使用它。

以上图为例，其中红框部分的格式为 `{集合名}:{图标名}` ，所以在框架中使用就是下面这样。

```vue
<i-mdi-account-box />
```

> unplugin-icons 会在你使用到某个图标集的时候，判断是否安装相关依赖，如果没有则自动安装并刷新程序，整个过程全自动，无需手动干预。你可以在框架中使用任意图标集里的任意图标，构建的时候只会构建使用到的图标，而不会对整个图标集进行构建，你无需担心。

## 图片

框架用到的图片资源都放在 `/src/assets/images/` 目录下，可自行新建文件夹分类管理。

## 精灵图

精灵图又称雪碧图，原理是将多张小图合并到一张大图上，以便减少 HTTP 请求，提高网站访问速度。

:::tip 说明
在 HTTP/1.1 下，因**队头阻塞**的问题，如果在一个页面里需要展示多张小图，建议使用精灵图

但 HTTP/2 的**多路复用**特性，已经不太需要精灵图合并了，我们更建议使用 SVG 图标代替精灵图
:::

精灵图原始图片的存放位置位于 `/src/assets/sprites/` 目录下，注意按文件夹区分。

项目运行前会根据文件夹生成对应的精灵图文件（精灵图图片和 `.scss` 资源文件），多个文件夹则会生成多个精灵图文件。需要注意的是，在项目运行时，修改文件夹里的图片，会重新生成相关精灵图文件，但如果新建文件夹，则需要重新运行项目才会生成对应精灵图文件。

可通过 `@include` 直接使用精灵图，无需手动引入 `.scss` 文件，使用方法如下：

:::: code-group
::: code-group-item 方法 1
```scss:no-line-numbers
// @include [文件夹名称]-sprite([文件名称]);
.icon {
    @include example-sprite(address);
}

// 输出
.icon {
    background-image: url(img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png);
    background-position: 0px 0px;
    background-size: 210px 210px;
    width: 100px;
    height: 100px;
}
```
:::
::: code-group-item 方法 2
```scss:no-line-numbers
// @include all-[文件夹名称]-sprites;
@include all-example-sprites;

// 输出
.example-address-sprites {
    background-image: url(img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png);
    background-position: 0 0;
    background-size: 210px 210px;
    width: 100px;
    height: 100px;
}
.example-feedback-sprites {
    background-image: url(img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png);
    background-position: -110px 0;
    background-size: 210px 210px;
    width: 100px;
    height: 100px;
}
.example-payment-sprites {
    background-image: url(img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png);
    background-position: 0 -110px;
    background-size: 210px 210px;
    width: 100px;
    height: 100px;
}
```
:::
::::

如果是小型项目，静态图片不多，可全部放在一个文件夹内；如果是中大型项目，文件夹可按模块来划分，这样不同的模块最终会生成各自的精灵图文件。

:::warning 注意
文件命名仅支持字母与数字，所有特殊符号均会被转化为 `-` ，如：

- `test_123` => `test-123`
- `test@2x` => `test-2x`
- `test - 123` => `test-123`
- `test$%123` => `test-123`

使用过程中如果发现无法正常展示图片，可检查生成的 `.scss` 文件，确定在代码中使用的文件名。
:::

## 样式

样式存放目录为 `/src/assets/styles/` ，因为 Vue 的文件特性，页面样式建议写在 `.vue` 文件里，所以该目录只存放全局样式，方便统一管理。

此目录下还有一个特殊目录，即 `/src/assets/styles/resources/` ，这是全局 SCSS 资源目录，首先这个目录里只支持 `.scss` 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。

同样，精灵图目录下生成的 SCSS 资源也是全局可调用的。

:::tip 说明
全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西
:::

## 组件

### 全局组件

::: tip 并非全局引用
与 Vue2 版本不同，这里所谓的“全局组件”并不会注册到全局，而是在使用的时候自动引入，该特性由 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 提供支持。
:::

全局组件存放在 `/src/components/` 目录下，需要注意各个组件按文件夹进行区分。

每个组件的文件夹内至少保留一个文件名为 `index.vue` 的组件入口（可参考 `SvgIcon` 组件），文件夹名称即为组件名。

推荐使用 `pnpm new` 指令进行组件生成，详细可查看《[代码文件自动生成](plop.md)》。

### 局部组件

局部组件没有提供专门的存放目录，我们建议采用就近原则，即局部组件与使用页面离得越近越好。你可以在每个模块的文件夹下，建立一个 `components` 文件夹用于存放局部组件。