<template>
  <label :class="{ label: true!, label__active: checked, label__disabled: disabled }" @click="handleLabel">
    <view :style="radioStyle" class="radio" />
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { computed, inject, ref, watch } from 'vue'

import { getCssDefaultUint } from '../common/index'

interface IProps {
  value?: any
  size?: number | string
  checked?: boolean
  disabled?: boolean
  checkedColor?: string
}

const props = withDefaults(defineProps<IProps>(), {
  size: 26,
})
const emits = defineEmits(['change'])
const setModel = inject<<T>(args: T) => void>('set')

const checked = ref<boolean>(false)

const radioStyle = computed(() => {
  const { size } = props
  const sizeValue = getCssDefaultUint(size)

  return {
    width: sizeValue,
    height: sizeValue,
  }
})
const activeRadioBorder = computed(() => {
  const { checkedColor } = props

  return checkedColor || 'var(--color-radio-border)'
})
const activeRadioAfterBackground = computed(() => {
  const { checkedColor } = props

  return checkedColor || 'var(--color-active-radio)'
})

watch(() => props.checked, (newValue) => {
  if (newValue) handleLabel()
}, {
  immediate: true,
})

function handleLabel() {
  setModel?.(props.value)
}

function onChecked(status: boolean) {
  checked.value = status
  emits('change', status)
}

defineExpose({
  onChecked,
})
</script>

<style lang="scss" scoped>
.label {
  position: relative;
}

.radio {
  transition: all 200ms ease-out;
  position: relative;
  display: inline-block;
  margin-top: -2rpx;
  vertical-align: middle;
  border: 1px solid var(--color-radio-border);
  background: var(--color-radio-background);
  border-radius: 50%;
  &::after {
    content: "";
    transition: all 200ms ease-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background-color: var(--color-radio);
    border-radius: 50%;
  }
}

.label__active {
  .radio {
    // border-color: var(--color-active-radio-border);
    border-color: v-bind(activeRadioBorder);
    background: var(--color-active-radio-background);
  }

  .radio::after {
    // background: var(--color-active-radio);
    background: v-bind(activeRadioAfterBackground);
  }
}

.label__disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
