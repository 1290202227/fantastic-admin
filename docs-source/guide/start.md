# 开始

做好准备工作后，请在项目根目录下依次执行以下命令：

```bash:no-line-numbers
# 安装依赖
pnpm install

# 运行
pnpm run dev
```

运行成功后，会自动访问页面，默认情况下，地址为 `http://localhost:9000`

::: warning 注意
安装依赖时如果提示 husky 安装失败，请使用 `git init` 对项目进行初始化，然后重新安装依赖即可。

husky 需要项目有 git 环境才能正常安装，详细介绍请阅读《[代码规范 - husky & lint-staged](coding-standard.md#husky-lint-staged)》。
:::

::: warning 运行报错
如果运行提示「 'vite' 不是内部或外部命令，也不是可运行的程序或批处理文件 」，可能是因为依赖未安装成功，可以尝试执行 `pnpm config set registry http://registry.npm.taobao.org` 切换为国内淘宝源后，删除根目录下 `./node_modules` 文件夹并重新安装依赖。

如果依旧无法运行，可尝试删除根目录下 `./node_modules` 文件夹与 `pnpm-lock.yaml` 文件后重新安装，或使用 `npm / yarn` 进行安装依赖。但需要清楚，这样操作将无法与官方环境锁定的依赖包版本保持一致，可能会出现无法预知的问题。非必要情况下，请勿删除 `pnpm-lock.yaml` 或使用其它依赖包管理工具安装。
:::