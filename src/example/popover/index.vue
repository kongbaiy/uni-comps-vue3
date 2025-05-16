<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="p-x-20px">
    <popover v-model="optionValue" :options="options">
      <zs-button type="primary">
        默认状态
      </zs-button>
      <text class="p-x-2px">
        选中值为：{{ optionValue }}
      </text>
    </popover>
  </view>

  <view class="module-title">
    先选配置
  </view>
  <view class="group-cols-3">
    <popover :options="customOptions" :field-names="customFieldNames">
      <zs-button type="primary">
        自定义字段
      </zs-button>
    </popover>
    <popover :options="customOptions" options-key="id" :field-names="customFieldNames">
      <zs-button type="primary">
        指定key
      </zs-button>
    </popover>
    <popover :options="options2">
      <zs-button type="danger">
        禁用选项
      </zs-button>
    </popover>
    <popover :options="options2" :active-index="activeIndex">
      <zs-button type="success">
        指定选项
      </zs-button>
    </popover>
  </view>

  <view class="module-title">
    自定义内容
  </view>
  <view class="p-x-20px">
    <popover>
      <zs-button type="primary">
        自定义选项
      </zs-button>
      <template #actions>
        <view class="p-x-8px b-1 b-solid b-#409eff rd-8rpx">
          <view class="text-base lh-60rpx b-b-1 b-b-solid b-b-#409eff">
            自定义选项1
          </view>
          <view class="text-base lh-60rpx b-b-1 b-b-solid b-b-#409eff">
            自定义选项2
          </view>
          <view class="text-base lh-60rpx">
            自定义选项3
          </view>
        </view>
      </template>
    </popover>
  </view>

  <view class="module-title">
    指定位置
  </view>
  <view class="group-cols-3">
    <popover position="top">
      <zs-button type="primary">
        顶部位置
      </zs-button>
      <template #actions>
        <view class="p-x-8px b-1 b-solid b-#409eff rd-8rpx">
          <view class="text-base lh-60rpx b-b-1 b-b-solid b-b-#409eff">
            自定义选项1
          </view>
          <view class="text-base lh-60rpx b-b-1 b-b-solid b-b-#409eff">
            自定义选项2
          </view>
          <view class="text-base lh-60rpx">
            自定义选项3
          </view>
        </view>
      </template>
    </popover>
    <popover position="bottom" :options="options2" :active-index="activeIndex">
      <zs-button type="primary">
        底部位置
      </zs-button>
    </popover>
    <popover position="left" :options="options2" :active-index="activeIndex">
      <zs-button type="primary">
        左边位置
      </zs-button>
    </popover>
    <popover position="right" :options="options2" :active-index="activeIndex">
      <zs-button type="primary">
        右边位置
      </zs-button>
    </popover>
  </view>

  <view class="module-title">
    遮罩
  </view>
  <view class="group-cols-3">
    <popover position="right" :options="options2" :active-index="activeIndex">
      <zs-button type="primary">
        不显示遮罩
      </zs-button>
    </popover>
    <popover position="right" :options="options2" :active-index="activeIndex" show-mask>
      <zs-button type="primary">
        显示遮罩
      </zs-button>
    </popover>
  </view>

  <view class="module-title">
    焦点
  </view>
  <view class="group-cols-3">
    <popover
      show-mask
      :guide="isGuide"
      @open="handleFocusOpen"
    >
      <zs-button type="primary">
        点击选项 xxx
      </zs-button>
      <template #actions>
        <view>英雄名称a</view>
        <view>英雄名称b</view>
        <view>英雄名称c</view>
      </template>
    </popover>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import zsButton from '../../components/button/button.vue'

const options = [
  { label: 'option1', value: 'a' },
  { label: 'option2', value: 'b' },
  { label: 'option3', value: 'c' },
]

const customOptions = [
  { name: '英雄名称a', type: 'a', id: 1 },
  { name: '英雄名称b', type: 'b', id: 2 },
  { name: '英雄名称c', type: 'c', id: 3 },
]

const customFieldNames = {
  label: 'name',
  type: 'adc',
}

const options2 = [
  { label: 'option1', value: 'a' },
  { label: 'option2', value: 'b', disabled: true },
  { label: 'option3', value: 'c' },
]

const optionValue = ref<string>('')
const activeIndex = ref<number>(2)
const isGuide = ref<boolean>(false)

function handleFocusOpen(visible: boolean) {
  isGuide.value = visible
}
</script>
