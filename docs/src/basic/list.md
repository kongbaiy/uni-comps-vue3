# List 列表

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| height | 高度 | string | - | - |
| scrollTop | 设置竖向滚动条位置 | number | -  |  |
| upperThreshold | 距底部/右边触发距离 | number | -  | - |
| lowerThreshold | 距底部/右边触发距离 | number | -  | `60` |
| scrollWithAnimation | 设置滚动条位置时的过渡动画 | boolean | `true` `false`  | `false` |
| showScrollbar | 控制是否出现滚动条 | boolean | `true` `false`  | `false` |
| refresherEnabled | 开启自定义下拉刷新 | boolean | `true` `false`  | `true` |
| refresherThreshold | 设置自定义下拉刷新阈值 | number | -  | `45` |
| action | 请求方法  | (query) => Promise | -  | - |
| query | 请求参数  | object | -  | - |
| pageField | 页数字段 | string | -  | `page` |
| responseConfig | 响应设置 | [responseConfig](#responseconfig) | -  | - |
| modelValue | 绑定数据 | object | -  | - |
| noDataText | 暂无数据文字提示 | string | -  | —— 暂无数据 —— |
| noMoreDataText | 无更多数据文字提示 | string | -  | 没有更多的数据啦~ |

## responseConfig

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| pageCount | 总页数 | number | -  | - |
| data | 列表数据 | array | -  | - |

## Slots

| 插槽名称 | 说明 | 参数 | 类型 |
|-------|-------|-------|-------|
| noData | 暂无数据提示 | - | - |
| noMoreData | 无更多数据提示 | - | - |

## Events

| 事件名称 | 说明 | 参数 | 返回值 |
|-------|-------|-------|-------|
| refresh | 监听刷新 | `Function` | - |
| refreshBort | 监听取消刷新 | - | - |
| scrolltoupper | 监听上拉事件 | - | - |
| scrolltolower | 监听下拉事件 | - | - |
