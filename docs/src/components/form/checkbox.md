# Checkbox 复选框

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| value | 选中值 | string/number | -  | - |
| checked | 选中状态 | boolean | `true` `false`  | `false` |
| disabled | 禁用 | boolean | `true` `false` | `false` |
| size | 单选按钮大小 | string | -  | - |
| checkedColor | 选中状态颜色 | string | -  | - |
| radius | 圆角 | string | -  | - |

## Events

| 事件名称 | 说明 | 参数 | 返回值 |
|-------|-------|-------|-------|
| change | 选中状态变化触发的事件 |  `checked` | boolean |

## Slots

| 插槽名称 | 说明 | 参数 | 类型 |
|-------|-------|-------|-------|
| icon | 自定义icon | `checked` | boolean |
