<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="p-x-20px">
    <zs-text :content="content" :line-clamp="2" />
  </view>

  <view class="module-title">
    文字颜色
  </view>
  <view class="p-x-20px">
    <zs-text :content="content" color="blue" :line-clamp="2" />
  </view>

  <view class="module-title">
    自定义收展文字
  </view>
  <view class="p-x-20px">
    <zs-text :content="content" expand-text="expand" collapse-text="collapse" />
  </view>

  <view class="module-title">
    自定义收展按钮
  </view>
  <view class="p-x-20px">
    <zs-text :content="content" :line-clamp="3">
      <template #expand="{ isExpand }">
        <zs-button v-if="!isExpand" type="primary">
          展开
        </zs-button>
        <zs-button v-else type="warning">
          收起
        </zs-button>
      </template>
    </zs-text>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import zsText from '@/components/text/text.vue'
import zsButton from '@/components/button/button.vue'

const content = ref(Array(20).fill('一段文本').join(''))
</script>
