<template>
  <label :class="{ label: true!, label__active: checked, label__disabled: disabled }" @click="handleLabel">
    <view :style="checkboxStyle" class="checkbox">
      <slot name="icon" :checked="checked" />

      <custom-icon v-if="!$slots.icon" v-show="checked" type="checkbox" :size="size"
        :color="checkedColor || `var(--color-active-checkbox)`" />
    </view>
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { computed, inject, ref, watch } from 'vue'
import { getCSSDefaultUint } from '../common/index'

import customIcon from '../icon/icon.vue'

interface IProps {
  value?: any
  checked?: boolean
  disabled?: boolean
  size?: number | string
  checkedColor?: string
  radius?: number | string
}

const props = withDefaults(defineProps<IProps>(), {
  size: 26,
})
const emits = defineEmits(['change'])
const setModel = inject<<T>(args: T) => void>('set')
const getModel = inject<() => any[]>('get')
const removeModel = inject<<T>(args: T) => void>('remove')

const checked = ref<boolean>()

const checkboxStyle = computed(() => {
  const { checkedColor, size, radius } = props
  const sizeValue = getCSSDefaultUint(size)
  const radiusValue = getCSSDefaultUint(radius!)
  const style: AnyObject = {
    width: sizeValue,
    height: sizeValue,
    borderRadius: radiusValue,
  }

  if (checked.value && checkedColor) style.color = checkedColor

  return style
})

watch(() => props.checked, (newValue) => {
  if (newValue) handleLabel()
}, {
  immediate: true,
})

function handleLabel() {
  const modelValue = getModel?.()

  if (modelValue?.includes(props.value)) removeModel?.(props.value)
  else setModel?.([...modelValue!, props.value])
}

function onChecked(status: boolean) {
  checked.value = status
  emits('change', status)
}

defineExpose({
  onChecked,
})
</script>

<style scoped>
.label {
  display: inline-flex;
  align-items: center;
  vertical-align: top;
}

.checkbox {
  transition: all 200ms ease-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-checkbox-border);
  background: var(--color-checkbox-background);
}

.label__active .checkbox {
  color: var(--theme);
  border-color: var(--color-active-checkbox-border);
  background-color: var(--color-active-checkbox-background);
}

.label__disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
