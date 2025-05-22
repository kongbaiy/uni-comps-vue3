<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="p-x-20px">
    <zs-textarea placeholder="请输入" background="#ddd" />
  </view>

  <view class="module-title">
    禁用
  </view>
  <view class="p-x-20px">
    <zs-textarea placeholder="请输入" background="#ddd" disabled />
  </view>

  <view class="module-title">
    圆角
  </view>
  <view class="p-x-20px p-b-20px">
    <zs-textarea placeholder="请输入" background="#ddd" radius="8px" />
  </view>

  <view class="module-title">
    显示字数及限制字数
  </view>
  <view class="p-x-20px p-b-20px">
    <zs-textarea placeholder="请输入" background="#ddd" word-number :maxlength="20" />
  </view>
</template>

<script lang="ts" setup>
import zsTextarea from '@/components/textarea/textarea.vue'
</script>
