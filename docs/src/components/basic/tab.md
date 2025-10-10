# Tab 标签

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| vertical | 垂直方式 | boolean | `true` `false` | `false` |
| height | 高度 | string | -  | - |
| data | tab 数据 | array | -  | - |
| dataKey | tab 数据遍历 `key` | string | -  | - |
| restyle | 重置样式 | string/object | - | - |
| showScrollbar | 显示滚动条 | boolean |`true` `false` | `false` |

## TabContent 标签页内容

可以结合 `Tab` 使用，实现联动

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| targetRef | tab 的 ref 实例 | VNodeRef | - | - |
| current | 当前下标 | number | -  | - |
| vertical | 垂直方式 | boolean | `true` `false` | `false` |
| height | 高度 | string | - | - |

## TabGroup

组合 `Tab` 和 `TabContent` 布局排版,  `Tab` `TabContent` 会自动适配

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| vertical | 垂直方式 | boolean | `true` `false` | `false` |
| gap | 间隔 | string | -  | - |
| height | 高度 | string | - | - |
