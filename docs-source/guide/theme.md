# 主题

## 框架主题

### 基础版

基础版主题样式存放在 `/src/assets/styles/resources/themes.scss` 文件中，均为 scss 变量，修改后即可在页面上查看效果。

### 专业版

与基础版不同，专业版默认提供了 6 款主题，在配置文件中就可轻松切换。并且多款主题共存，支持在项目运行时动态切换。

```js:no-line-numbers
/**
 * 主题，默认提供 6 款
 * default 默认
 * vue-cli Vue CLI 风格
 * gitee 码云风格
 * freshness 清新
 * elegant 素雅
 * pure-white 纯白
 */
theme: 'default'
```

如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题，在 `/src/assets/styles/resources/` 目录里， `theme-*.scss` 即主题样式文件，以默认主题为例：

```scss:no-line-numbers
$theme-default: (
    // 主区域背景色
    g-main-bg: #f0f2f5,
    // 【头部】
    // 头部背景色
    g-header-bg: #222b45,
    // 头部导航文字颜色
    g-header-menu-color: #ccc,
    // 头部导航文字选中颜色
    g-header-menu-active-color: #fff,
    // 头部导航选中背景色
    g-header-menu-active-bg: #334067,
    ...
);
```

可以看到，默认主题的样式都存放在 `$theme-default` 这个变量里，所以如果想创建一个新主题，你可以将 `theme-default.scss` 文件复制一份，例如我们要增加一个红色主题，则需要将文件名改为 `theme-red.scss` ，然后将文件里的 `$theme-default` 变量名也修改为 `$theme-red` ，最后打开 `/src/assets/styles/resources/themes.scss` 文件，然后增加以下一行代码即可。

```scss {8}
$themes: (
    default: $theme-default,
    vue-cli: $theme-vue-cli,
    gitee: $theme-gitee,
    freshness: $theme-freshness,
    elegant: $theme-elegant,
    pure-white: $theme-pure-white,
	red: $theme-red
);
```

最后在框架配置里修改主题为 `red` 就可以调用这个我们创建的主题了。

```js:no-line-numbers
theme: 'red'
```

## Element Plus 主题

> 详细可阅读 Element Plus 官方文档《[自定义主题](https://element-plus.gitee.io/zh-CN/guide/theming.html)》。

最常见的需求就是修改 Element Plus 的主题色，你可以在 `/src/assets/style/` 目录下新建一个 `element.customized.scss` 文件，并在文件中写入以下代码。

```scss
@forward "element-plus/theme-chalk/src/common/var.scss" with (
    $colors: (
        "primary": (
            "base": green
        )
    )
);
@use "element-plus/theme-chalk/src/index.scss" as *;
```

然后在 `/src/assets/style/global.scss` 文件的开头加入一行 `@import "element.customized.scss";` ，这时候在页面上能看到自定义的主题色已经生效了，但你还需要打开 `/src/main.js` 文件，找到 `import 'element-plus/dist/index.css'` 这一行并删除，以减少样式重复载入。

除了修改主题色外，还可以到 Element Plus 的 [`packages/theme-chalk/src/common/var.scss`](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss) 中查找其它 scss 变量。