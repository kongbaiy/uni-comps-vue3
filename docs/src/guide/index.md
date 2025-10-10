# 介绍

<b>uni-components-vue3</b> 是一个轻量、可靠的移动端组件库，目前提供了Vue 3 微信小程序版本。
组件 demo 演示可以下载微信开发工具，
打开 [uni-components-vue demo](https://developers.weixin.qq.com/s/NL0hlDms8H0T)，
要求最低版本库 `3.6.2`。

## 安装

您需要使用 NPM 或任何其他 Node 模块包管理器安装该模块

```shell
# via npm
npm i -D @lightsoft/uni-components-vue3

# via yarn
yarn add -D @lightsoft/uni-components-vue3

# via pnpm
pnpm i -D @lightsoft/uni-components-vue3
```

## 引入组件

引入样式

```JavaScript
import '@lightsoft/uni-components-vue3/style.css'
```

### Components 自动导入

需要安装 `unplugin-vue-components/vite` 插件, 推荐自定义解析，`dirs` 方式，
在引入某些组件会和原生组件冲突，如 `Button` 。

```shell
# via npm
npm i -D unplugin-vue-components/vite

# via yarn
yarn add -D unplugin-vue-components/vite

# via pnpm
pnpm i -D unplugin-vue-components/vite
```

引入插件

```JavaScript
import Components from 'unplugin-vue-components/vite'
import { kebabCase } from 'unplugin-vue-components'
```

```JavaScript
Components({
    dts: './components.d.ts',
    resolvers: [
        (name) => {
          if (name.startsWith('Zs')) {
            const kebabName = kebabCase(name).slice(3);

            return {
              name: name,
              from: `@lightsoft/uni-components-vue3/package/${kebabName}/${kebabName}.vue`,
              as: kebabName, // 组件名
            }
          }
        },
    ],
}),

```

### easycom

微信小程序官方推荐方式，通过在 `page.json` 中配置

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^zs-(.*)": "@lightsoft/uni-components-vue3/package/$1/$1.vue"
    }
  }
}
```
