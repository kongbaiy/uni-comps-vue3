<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="p-x-20px">
    <zs-radio-group v-model="radio1">
      <zs-radio value="a">
        选项一
      </zs-radio>
      <zs-radio value="b">
        选项二
      </zs-radio>
    </zs-radio-group>
  </view>

  <view class="module-title">
    禁用状态
  </view>
  <view class="p-x-20px">
    <zs-radio-group v-model="radio2">
      <zs-radio value="a" disabled>
        选项一
      </zs-radio>
      <zs-radio value="b">
        选项二
      </zs-radio>
    </zs-radio-group>
  </view>

  <view class="module-title">
    自定义大小颜色
  </view>
  <view class="p-x-20px">
    <zs-radio-group v-model="radio3">
      <zs-radio value="a" radius="4px" size="40rpx" checked-color="orange">
        选项一
      </zs-radio>
      <zs-radio value="b">
        选项二
      </zs-radio>
      <zs-radio value="C">
        选项二
      </zs-radio>
    </zs-radio-group>
  </view>

  <view class="module-title">
    默认选中
  </view>
  <view class="p-x-20px">
    <zs-radio-group v-model="radio4">
      <zs-radio value="a" checked @change="radioChange">
        选项一
      </zs-radio>
      <zs-radio value="b">
        选项二
      </zs-radio>
    </zs-radio-group>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import zsRadioGroup from '@/components/radio-group/radio-group.vue'
import zsRadio from '@/components/radio/radio.vue'

const radio1 = ref([])
const radio2 = ref([])
const radio3 = ref([])
const radio4 = ref([])

function radioChange(e: any) {
  console.log('radio1Change', e)
}
</script>
