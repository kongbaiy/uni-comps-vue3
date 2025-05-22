<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="p-x-20px">
    <slide-action>
      <view class="h-60 bg-#ddd" />
      <template #action>
        <view class="flex items-center justify-center w-200 h-full bg-blue text-white">
          联系
        </view>
      </template>
    </slide-action>
  </view>

  <view class="module-title">
    高级用法
  </view>
  <view class="p-x-20px">
    <view>
      <zs-button type="primary" @click="handleStart">
        开启
      </zs-button>
      <zs-button type="warning" @click="handleStop">
        关闭
      </zs-button>
    </view>
    <slide-action ref="slideActionRef">
      <view class="h-60 bg-#ddd" />
      <template #action>
        <view class="flex items-center justify-center w-200 h-full bg-blue text-white">
          联系
        </view>
      </template>
    </slide-action>
  </view>

  <view class="module-title">
    扩展运用
  </view>
  <view class="p-x-20px">
    <slide-delete @delete="handleDelete">
      <view class="p-x-20rpx h-80 lh-80rpx bg-blue text-white">
        滑动删除
      </view>
    </slide-delete>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import zsButton from '@/components/button/button.vue'
import SlideAction from '@/components/slide-action/slide-action.vue'
import slideDelete from '@/components/slide-delete/slide-delete.vue'

const slideActionRef = ref()

function handleStart() {
  slideActionRef.value.start()
}

function handleStop() {
  slideActionRef.value.stop()
}

function handleDelete() {
  uni.showToast({
    title: '删除',
    icon: 'none',
  })
}
</script>
