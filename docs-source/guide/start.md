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
如果运行提示「 'vite' 不是内部或外部命令，也不是可运行的程序或批处理文件 」，请删除根目录下 `./node_modules` 文件夹与 `pnpm-lock.yaml` 文件，重新安装依赖并运行。
:::