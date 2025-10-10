<template>
  <form>
    <slot />
  </form>
</template>

<script lang="ts">
import { type ComponentInternalInstance, getCurrentInstance, isReactive } from 'vue'
import { type IFormValidatorOptions, formValidator } from './validator'

export default {
  behaviors: ['wx://form-field', 'wx://form-field-group', 'wx://form-field-button'],
}
</script>

<script lang="ts" setup>
export type Prompt = 'toast' | 'message'
export type Layout = 'left' | 'right' | 'top'
export type Align = 'left' | 'right' | 'justify'

interface IProps extends Pick<IFormValidatorOptions, 'rules'> {
  layout?: Layout
  modelValue: any
  prompt: Prompt
  labelWidth?: string
  labelGap?: string
  align?: Align
  gap?: string
}

const props = withDefaults(defineProps<IProps>(), {
  prompt: 'message',
})
const emits = defineEmits<(e: 'update:modelValue', value?: AnyObject) => void>()
const instance: ComponentInternalInstance | any = getCurrentInstance()

defineExpose({
  ...props,
  validate: (callback: <T>(data: T) => void) => {
    const { modelValue: formData = {}, rules, prompt } = props
    const children = instance.proxy?.$children

    children.forEach((item: any) => {
      const rule = rules[item.prop]

      if (item.required && item.prop) {
        if (!rule?.length) rules[item.prop] = [{ message: '值不能未空', required: true }]
        else rule[0].required = true
      }

      item.setErrorMessage?.('')
    })

    formValidator({
      form: formData,
      rules,
    }).then(callback).catch((error) => {
      const { currentRule } = error[0]

      if (prompt === 'toast') {
        uni.showToast({
          title: currentRule.message,
          icon: 'none',
        })
        return
      }

      error.forEach((item: any) => {
        const { setErrorMessage } = children.find((cItem: any) => cItem.prop === item.key) || {}
        setErrorMessage?.(currentRule.message)
      })
    })
  },
  resetForm: () => {
    if (isReactive(props.modelValue)) {
      for (const i in props.modelValue) {
        props.modelValue[i]! = null
      }

      return
    }

    emits('update:modelValue', {})
  },
})
</script>

<style scoped>
.form-item:last-child {
  border-color: transparent;
}
</style>
