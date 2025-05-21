<template>
  <page-meta page-style="background-color:#f0f0f0;" />

  <view class="container">
    <view v-for="(item, index) in list" :key="index">
      <view class="title">
        {{ item.title }}
      </view>
      <view v-for="(cItem, cIndex) in item.children" :key="cIndex" class="cell" @click="toNavigate(cItem.path)">
        {{ cItem.text }}
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref<any[]>([
  {
    title: '基础组件',
    children: [
      {
        text: 'Button 按钮',
        path: '/example/button/index',
      },
      {
        text: 'Icon 图标',
        path: '/example/icons/index',
      },
      {
        text: 'Popover 气泡',
        path: '/example/popover/index',
      },
      {
        text: 'Popup 弹出层',
        path: '/example/popup/index',
      },
      {
        text: 'dialog 弹窗',
        path: '/example/dialog/index',
      },
      {
        text: 'TabNav 标签页',
        path: '/example/tab-nav/index',
      },
    ],
  },
  {
    title: '表单组件',
    children: [
      {
        text: 'Checkbox 多选框',
        path: '/example/checkbox/index',
      },
      {
        text: 'Radio 单选框',
        path: '/example/radio/index',
      },
      {
        text: 'Search 输入框',
        path: '/example/search/index',
      },
    ],
  },
])

function toNavigate(path: string) {
  uni.navigateTo({
    url: path,
  })
}
</script>

<style lang="scss" scoped>
.container {
  padding: 24rpx;
}

.title {
  padding-top: 20rpx;
  margin-bottom: 20rpx;
  font-size: 32rpx;
  color: #333;
}

.cell {
  margin-bottom: 20rpx;
  padding: 20rpx;
  font-size: 28rpx;
  color: #666;
  background-color: #f5f5f5;
  border-radius: 35rpx;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
  transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.cell:hover {
  color: #000;
  box-shadow: 0 2rpx 20rpx rgba(0, 0, 0, 0.1);

}
</style>
