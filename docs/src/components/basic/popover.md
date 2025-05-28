# Popover

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| options | 选项数据 | [options](#options) | - | - |
| optionsKey | 选项 key | string | -  | `1` |
| fieldNames | 字段 | [fieldNames](#fieldnames) | -  | - |
| modelValue | 绑定值 | string/number | -  | - |
| showMask | 显示遮罩 | boolean | -  | `true` |
| guide | 引导焦点 | boolean | `true` `false` | `false` |
| position | 展示位置 | string | `top` `bottom` `left` `right` | `left` |
| offsetX | x轴偏移  | string | -  | - |
| offsetY | y轴偏移 | string | -  | - |
| activeIndex | 默认选中下标 | number | -  | - |

## Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| disabled | 禁用 | boolean | `true` `false` | `false` |
| any | 任意字段 | any | -  | - |

## FieldNames

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| label | label 字段名 | string | -  | - |
| value | value 字段名 | string | -  | - |

## Slots

| 插槽名称 | 说明 | 参数 | 类型 |
|-------|-------|-------|-------|
| options | 自定义选项 | `close` | Function |

## Events

| 事件名称 | 说明 | 参数 | 返回值 |
|-------|-------|-------|-------|
| change | 监听选项值变化, 返回两个参数，当前数据和下标 | `currentData` `currentIndex` | - |
| open | 监听打开事件, 参数 `show` 返回一个 `boolean` | `show` | - |
