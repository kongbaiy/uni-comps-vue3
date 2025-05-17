<template>
  <view
    v-if="show"
    :style="{
      width,
      height,
      background,
    }"
    :class="[
      'popup'!,
      `popup-${position}`,
      active ? `popup-${position}__active` : '',
    ]"
    @transitionend="handleTransitionend"
  >
    <view
      v-if="!$slots.header && title"
      class="popup-header"
    >
      {{ title }}
    </view>
    <slot v-else name="header" />

    <slot v-if="$slots.icon" name="icon" />
    <custom-icon
      v-if="showCloseIcon && !$slots.icon"
      type="close"
      :size="42"
      class="popup-close"
      @tap="handleClose"
    />

    <view class="popup-content">
      <slot v-if="active" />
    </view>
  </view>

  <view
    v-if="showMask && show"
    :class="[
      'popup-mask'!,
      active ? 'popup-mask__active' : '',
    ]"
    catchtouchmove="emptyFunction"
    @click="maskClose && handleClose()"
  />
</template>

<script lang="ts" setup name="Popup">
import { type Ref, ref, watch, watchPostEffect } from 'vue'
import { NodeSelector } from '../common/index'
import { fontSize } from '../common/config'

import customIcon from '../icon/icon.vue'

type Position = 'top' | 'bottom' | 'center' | 'right' | 'left'

interface IProps {
  modelValue: Ref<boolean>
  title?: string
  position?: Position
  width?: string
  height?: string
  padding?: string
  background?: string
  radius?: string
  showCloseIcon?: boolean
  showMask?: boolean
  maskClose?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  position: 'bottom',
  padding: '20rpx',
  radius: '32rpx',
  showCloseIcon: true,
  showMask: false,
  maskClose: false,
})
const emits = defineEmits<(e: 'update:modelValue', value: boolean) => void>()

const show = ref<boolean>(false)
const active: Ref = ref<boolean>(false)
const getNode = new NodeSelector()
const { large } = fontSize

watch(() => props.modelValue, (newValue: IProps['modelValue']) => {
  if (newValue) show.value = true
  else active.value = false
})

watchPostEffect(() => {
  if (show.value) {
    getNode.query('.popup', () => {
      active.value = true
    })
  }
})

function handleClose() {
  emits('update:modelValue', false)
}

function handleTransitionend() {
  if (!props.modelValue && !active.value) show.value = false
}
</script>

  <style lang="scss" scoped>
  .popup-mask {
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 60;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .popup-mask__active {
    opacity: 1;
  }

  .popup {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 62;
    transition: opacity 200ms cubic-bezier(0.2, 0, 0.2, 0.1);
  }

  .popup-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 62;
    padding: 16rpx 32rpx;
    width: 36rpx;
    height: 36rpx;
  }

  .popup-header {
    height: 80rpx;
    font-size: v-bind(large);
    color: var(--color-h1);
    text-align: center;
    line-height: 80rpx;
  }

  .popup-top {
    left: 0;
    top: 0;
    transform: translateY(-100%);
    width: 100%;
    border-bottom-left-radius: v-bind(radius);
    border-bottom-right-radius: v-bind(radius);
    background-color: white;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .popup-top__active {
    transform: translateY(0);
  }

  .popup-bottom {
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    width: 100%;
    border-top-left-radius: v-bind(radius);
    border-top-right-radius: v-bind(radius);
    background-color: white;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .popup-bottom__active {
    transform: translateY(0);
  }

  .popup-left {
    left: 0;
    top: 0;
    transform: translateX(-100%);
    height: 100%;
    background-color: white;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .popup-left__active {
    transform: translateX(0);
  }

  .popup-right {
    top: 0;
    right: 0;
    transform: translateX(100%);
    height: 100%;
    background-color: white;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .popup-right__active {
    transform: translateX(0);
  }

  .popup-right .popup-close {
    left: 0;
    right: auto;
  }

  .popup-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.68);
    background-color: white;
    opacity: 0;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .popup-center__active {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;

  }

  .popup-content {
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding: v-bind(padding);
  }
</style>
