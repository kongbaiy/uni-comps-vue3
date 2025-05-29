<template>
  <view :class="`icon icon-${type}`" />
</template>

<script lang="ts" setup>
import { getCssDefaultUint } from '../common/index'

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

const iconFontSize = getCssDefaultUint(props.size)
</script>

<style lang="scss" scoped>
@import url('../assets/icons/index.scss');

.icon {
    display: inline-block;
    font-size: v-bind(iconFontSize);
    color: v-bind(color);
}
</style>
