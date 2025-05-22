import path from 'node:path'
import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'

const vitepressSidebarOptions = {
  documentRootPath: 'docs/src', // 文档根目录
  collapsed: false, // 折叠组关闭
  collapseDepth: 2, // 折叠组2级菜单
  removePrefixAfterOrdering: true, // 删除前缀，必须与prefixSeparator一起使用
  prefixSeparator: '_', // 删除前缀的符号
}

export default defineConfig({
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        // demoDir: path.resolve(__dirname, '../../src/example/'),
      })
    },
  },

  base: '/doc/',
  title: 'uni comps vue3',
  description: 'A VitePress Site',
  srcDir: './src',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
    ],
    sidebar: generateSidebar(vitepressSidebarOptions),
  },
})
