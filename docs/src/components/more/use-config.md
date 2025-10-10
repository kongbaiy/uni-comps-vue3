# useConfig

库中提供了自定义组件函数，可以更灵活的制定UI样式

| 参数 | 说明 | 属性 |
|-------|-------|-------|
| style | 组件样式 | `paddingTop` `paddingBottom` `paddingLeft` `paddingRight` `width` `height` |
| size | 尺寸大小 | `mini` `small` `normal` `large` |
| fontSize | 字体大小 | `mini` `small` `normal` `large` |

创建 `components.config.ts` 文件

```TypeScript
import { useConfig } from 'uni-components-vue3/hooks'

export default useConfig({
  style: {
    button: {
      paddingLeft: '20rpx',
      paddingRight: '20rpx',
    }
  },
  size: {
    mini: '40rpx',
    small: '56rpx',
    normal: '72rpx',
    large: '88rpx',
  },
  fontSize: {
    mini: '24rpx',
    small: '28rpx',
    normal: '32rpx',
    large: '36rpx',
  },
})
```

## useStyle

在 `style` 属性可以使用 `useStyle` 方法，来定义多个组件样式

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| style | 组件样式 | 参考`useConfig.style` | - | - |
| componentName | 组件名称  | array | - | - |

```TypeScript
import { useConfig, useStyle } from 'uni-components-vue3/hooks'

const basic = useStyle({
    paddingLeft: '20rpx',
    paddingRight: '20rpx',
}, ['button', 'dialog', 'popup'])

export default useConfig({
  style: {
    ...basic
  },
  size: {
    mini: '40rpx',
    small: '56rpx',
    normal: '72rpx',
    large: '88rpx',
  },
  fontSize: {
    mini: '24rpx',
    small: '28rpx',
    normal: '32rpx',
    large: '36rpx',
  },
})
```
