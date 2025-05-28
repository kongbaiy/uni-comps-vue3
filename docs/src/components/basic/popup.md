# Popover

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| title | 标题 | string | - | - |
| width | 宽度 | string | - | - |
| height | 高度 | string | - | - |
| padding | 内边距 | string | - | `20rpx` |
| background | 背景 | string | - | - |
| radius | 倒圆角 | string | - | `32rpx` |
| position | 弹窗位置 | string | `top` `bottom` `center` `right` `left`  | `bottom` |
| modelValue | 绑定值 | string/number | -  | - |
| showCloseIcon | 显示关闭 icon | boolean | `true` `false` | `true` |
| showMask | 显示遮罩 | boolean | `true` `false` | `true` |
| maskClose | 点击遮罩关闭 | boolean | `true` `false` | `false` |

## Slots

| 插槽名称 | 说明 | 参数 | 类型 |
|-------|-------|-------|-------|
| header | 自定义头部 | - | - |
| icon | 自定义 icon | - | - |
