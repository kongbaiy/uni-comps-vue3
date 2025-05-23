# Search 搜索框

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| focus | 自动聚焦 | boolean | `true` `false`  | `false` |
| debounceTime | 防抖触发时间 | number | -  | 600 |
| confirmType | 提交按钮类型 | string | `send` `search` `next` `go` `done` | `search` |
| holdKeyboard | focus时，点击页面的时候不收起键盘 | boolean | `true` `false` | `false` |
| radius | 倒圆角 | string | -  | `34rpx` |
| showIcon | icon 显示 | boolean | `true` `false`  | `false` |
| color | 搜索框文字颜色 | string | -  | - |
| placeholder | 提示文字 | string | -  | - |
| placeholderColor | 示文字颜色 | string | -  | - |
| borderColor | 边框颜色 | string | -  | - |
| background | 背景 | string | -  | - |

## Events

| 事件名称 | 说明 | 参数 | 返回值 |
|-------|-------|-------|-------|
| input | 输入事件 | `value` | `string` |
| input:debounce | 防抖事件 | `value` | `string` |
| focus | 聚焦事件 | `event` | `Event` |
| blur | 失去焦点事件 | `event` | `Event` |
| confirm | 提交确认事件 | `event` | `Event` |
