# Form 表单

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| modelValue | 绑定值 | object | -  | - |
| layout | 表单布局 | string | `left` `right` `top`  | - |
| prompt | 消息提示方式 | string | `toast` `message`  | `message` |
| labelWidth | label 宽度 | string | -  | - |
| labelGap | label 间隔 | string | -  | - |
| align | label 对齐方式 | string | `left` `right` `justify` | - |
| gap | 表单选项之间的间隔 | string | - | - |

## Ref

| 事件名称 | 说明 | 参数 | 返回值 |
|-------|-------|-------|-------|
| validate | 表单验证，验证通过会执行 `callback` 函数 |  `callback` | - |
| resetForm | 重置表单 | - | - |
