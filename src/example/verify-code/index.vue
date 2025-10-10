<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="group-cols-3">
    <verify-code @start="handleStart1" />
  </view>

  <view class="module-title">
    手动触发
  </view>
  <view class="group-cols-3">
    <verify-code width="100px" height="60px" title="自定义文案" @start="handleStart2" />
  </view>

  <view class="module-title">
    自定义延迟
  </view>
  <view class="group-cols-3">
    <verify-code :delay="30" @start="handleStart" />
  </view>
</template>

<script lang="ts" setup>
import verifyCode from '@/components/verify-code/verify-code.vue'


function handleStart1(next: () => void) {
  next()
}


function handleStart2(next: () => void) {
  next()
}

function handleStart(next: () => void) {
  setTimeout(() => {
    next()
  }, 2000)
}
</script>
