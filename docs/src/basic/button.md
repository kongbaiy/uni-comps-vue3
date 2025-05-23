# Button 按钮
<!-- <demo html="./index.html"></demo> -->

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| type | 按钮类型 | string | `primary` `success` `warning` `danger` `stop`  | - |
| height | 高度 | string | -  | - |
| size | 按钮大小 | string | `mini` `small` `normal` `large`  | `small` |
| color | 文字颜色 | string | -  | - |
| borderColor | 边框颜色 | string | -  | - |
| background | 背景颜色 | string | -  | - |
| radius | 到圆角 | string | -  | - |
| shadow | 阴影 | string | -  | - |
| restyle | 重置样式 | string/object | -  | - |
| block | 块级按钮 | boolean | `true` `false` | `false` |
| plain | 镂空 | boolean | `true` `false` | `false` |
| disabled | 禁用 | boolean | `true` `false` | `false` |
| loading | 加载 | boolean | `true` `false` | `false` |
| openType | [微信开放能力](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | boolean | `true` `false` | `false` |
| formType | [表单类型](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)| string | `submit` `reset` | - |

## Events

事件详情参考微 [信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)

| 事件名称 | 说明 | 参数 | 返回值 |
|-------|-------|-------|-------|
| getphonenumber | 获取手机号 | - | - |
| getphonenumber | 获取用户信息 | - | - |
| chooseavatar | 获取用户头像 | - | - |
| submit | 表单提交 | - | - |
| reset | 表单重置 | - | - |
| click | 点击事件 | - | - |
