<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="p-x-20px">
    <zs-search placeholder="请输入" />
  </view>

  <view class="module-title">
    placeholder颜色
  </view>
  <view class="p-x-20px">
    <zs-search placeholder="请输入" placeholder-color="blue" />
  </view>

  <view class="module-title">
    自定义边框颜色
  </view>
  <view class="p-x-20px">
    <zs-search placeholder="请输入" border-color="blue" />
  </view>

  <view class="module-title">
    自定义背景颜色
  </view>
  <view class="p-x-20px">
    <zs-search placeholder="请输入" color="#fff" background="blue" border-color="blue" placeholder-color="#fff" />
  </view>
</template>

<script lang="ts" setup>
import zsSearch from '../../components/search/search.vue'
</script>
