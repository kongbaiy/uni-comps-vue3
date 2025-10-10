<template>
  <view :class="`icon icon-${type}`" />
</template>

<script lang="ts" setup>
import { getCSSDefaultUint } from '../common/index'

type Type = 'checkbox' | 'search' | 'search-clear' | 'close'

interface IProps {
  type: Type
  size?: string | number
  color?: string
}

const props = withDefaults(defineProps<IProps>(), {
  size: '20rpx',
  color: '#dbdddb',
})

const iconFontSize = getCSSDefaultUint(props.size)
</script>

<style scoped>
@import url('../assets/icons/index.css');

.icon {
  display: inline-block;
  font-size: v-bind(iconFontSize);
  color: v-bind(color);
}
</style>
