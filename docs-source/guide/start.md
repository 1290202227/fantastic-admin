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
husky 在安装时会检测当前目录下是否存在 `.git/` 目录，所以请确保已经使用 `git init` 对项目进行过 git 环境初始化，否则会提示 husky 安装失败。但如果框架根目录并不是项目根目录，例如项目目录是 `project/` ，而框架目录是 `project/fantastic-admin/` 的话，则需要在 `package.json` 里找到 `"prepare": "husky install"` 并修改为 `"prepare": "cd .. && husky install"` 。

了解更多请阅读《[代码规范 - husky & lint-staged](coding-standard.md#husky-lint-staged)》。
:::

::: warning 运行报错
如果运行提示「 'vite' 不是内部或外部命令，也不是可运行的程序或批处理文件 」，可能是因为依赖未安装成功，可以尝试执行 `pnpm config set registry https://registry.npmmirror.com/` 切换为国内淘宝源（也可以使用 [nrm](https://github.com/Pana/nrm) 一键切换源），然后删除根目录下 `./node_modules` 文件夹并重新安装依赖。

如果依旧无法运行，可尝试删除根目录下 `./node_modules` 文件夹与 `pnpm-lock.yaml` 文件后重新安装，或使用 `npm / yarn` 进行安装依赖。但需要清楚，这样操作将无法与官方环境锁定的依赖包版本保持一致，可能会出现无法预知的问题。非必要情况下，请勿删除 `pnpm-lock.yaml` 或使用其它依赖包管理工具安装。
:::