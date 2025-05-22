<template>
  <navbar title="固定导航栏" :fixed="true" background="rgba(59, 135, 241, 1)" color="#fff" :transition="true" :scroll="onPageScroll">
    <view class="h-100vh bg-#ddd">
      content
    </view>
  </navbar>
  <navbar title="自定义标题颜色" color="blue" />
  <navbar title="自定按钮颜色" go-back-color="blue" />
  <navbar title="自定背景颜色" background="blue" color="#fff" />
</template>

<script lang="ts" setup>
import { onPageScroll } from '@dcloudio/uni-app'
import navbar from '@/components/navbar/navbar.vue'
</script>
