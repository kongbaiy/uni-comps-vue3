<template>
  <default-button
   type="primary" 
   size="small" 
   :width="width" 
   :height="height" 
   :loading="loading" 
   :disabled="disabled"
    @tap="handleTap"
  >
    {{ buttonText }}
  </default-button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import DefaultButton from '../button/button.vue'

interface IProps {
  text?: string
  delay?: number
  width?: string
  height?: string
}

const props = withDefaults(defineProps<IProps>(), {
  text: '获取验证码',
  delay: 60,
})
const emits = defineEmits(['start'])

const loading = ref<boolean>(false)
const disabled = ref<boolean>(false)
const time = ref<number>(props.delay)
let interval: NodeJS.Timeout | null

const buttonText = computed(() => {
  if (time.value === props.delay) return props.text
  return `${time.value}s`
})

function next() {
  if (disabled.value) return

  disabled.value = true;
  startInterval()
}

function handleTap() {
  if(!disabled.value) loading.value = true

  emits('start', next)
}

function startInterval() {
  console.log('startInterval: ', startInterval);
  if (interval) return

  time.value -= 1
  loading.value = false;
  interval = setInterval(() => {
    if (time.value > 1) {
      time.value -= 1
    }
    else {
      clearInterval(interval as NodeJS.Timeout)
      interval = null
      time.value = props.delay
      disabled.value = false
    }
  }, 1000)
}
</script>
