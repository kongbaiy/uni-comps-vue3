# Validator 验证器

使用验证器`Validator`单独验证数据

## formValidator

| 事件名称 | 说明 | 参数 | 返回值 |
|-------|-------|-------|-------|
| formValidator | 验证函数 | [options](#options) |`Promise`|

## options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| form | 表单数据 | object | -  | - |
| rules | 验证规则数据 | object | -  | - |
| prompt | 表单验证提示 | boolean | `true` `false` | `false` |
