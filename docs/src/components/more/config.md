# Global

库中提供了自定义组件的函数和 css 变量，可以更灵活的制定UI样式

## useConfig

| 选项 | 说明 | 属性 |
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

`style` 属性可以使用 `useStyle` 方法覆盖多个组件样式

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

## Var

```css
  --theme: #409eff;

  --color-primary: var(--theme);
  --color-secondary: #6ABFFF;
  --color-info: #909399;
  --color-error: #FB5A5A;
  --color-warning: #ffb800;
  --color-success: #67c23a;
  --color-stop: #D9D9D9;

  /* 文本 */
  --color-h1: #333;
  --color-h2: #666;
  --color-h3: #999;
  --color-text-primary: #333;
  --color-text-regular: #666;
  --color-text-secondary: #999;

  /* 复选框 */
  --color-checkbox: #333;
  --color-active-checkbox: var(--theme);
  --color-checkbox-border: #333;
  --color-active-checkbox-border: var(--theme);
  --color-checkbox-background: transparent;
  --color-active-checkbox-background: transparent;

  /* 单选框 */
  --color-radio: #ddd;
  --color-active-radio: var(--theme);
  --color-radio-border: #ddd;
  --color-active-radio-border: var(--theme);
  --color-radio-background: transparent;
  --color-active-radio-background: transparent;
```
