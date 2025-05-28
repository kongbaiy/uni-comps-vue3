import path from 'node:path'
import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        // demoDir: path.resolve(__dirname, '../../src/example/'),
      })
    },
  },

  base: '/doc/',
  title: 'uni components vue3',
  description: 'uniapp components for Vue 3',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
  ],
  srcDir: './src',
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/components/basic/button' },

    ],
    outline: {
      label: '目录',
    },
    sidebar: generateSidebar([
      {
        documentRootPath: 'docs/src', // 组件文档根目录
        collapsed: false, // 折叠组关闭
        collapseDepth: 2, // 折叠组2级菜单
        scanStartPath: 'components',
        basePath: '/components/',
        resolvePath: '/components/',
        useTitleFromFileHeading: true,
        removePrefixAfterOrdering: true, // 删除前缀，必须与prefixSeparator一起使用
        prefixSeparator: '_', // 删除前缀的符号
      },
      {
        documentRootPath: 'docs/src', // 组件文档根目录
        collapsed: false, // 折叠组关闭
        collapseDepth: 2, // 折叠组2级菜单
        scanStartPath: 'guide',
        basePath: '/guide/',
        resolvePath: '/guide/',
        useTitleFromFileHeading: true,
        removePrefixAfterOrdering: true, // 删除前缀，必须与prefixSeparator一起使用
        prefixSeparator: '_', // 删除前缀的符号
      }
    ]),
  },
})
