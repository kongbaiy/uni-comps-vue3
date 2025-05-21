<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="p-x-20px">
    <zs-checkbox-group v-model="checkbox1">
      <zs-checkbox value="a">
        <view class="p-r-20rpx">
          选项一
        </view>
      </zs-checkbox>
      <zs-checkbox value="b">
        <view class="p-r-20rpx">
          选项二
        </view>
      </zs-checkbox>
    </zs-checkbox-group>
  </view>

  <view class="module-title">
    禁用状态
  </view>
  <view class="group-cols-3">
    <zs-checkbox-group v-model="checkbox2">
      <zs-checkbox value="a" disabled>
        <view class="p-r-20rpx">
          选项一
        </view>
      </zs-checkbox>
      <zs-checkbox value="b">
        <view class="p-r-20rpx">
          选项二
        </view>
      </zs-checkbox>
    </zs-checkbox-group>
  </view>

  <view class="module-title">
    自定义大小颜色
  </view>
  <view class="p-x-20px">
    <zs-checkbox-group v-model="checkbox3">
      <zs-checkbox value="a" radius="4px" size="40rpx" checked-color="orange">
        <view class="p-r-20rpx">
          选项一
        </view>
      </zs-checkbox>
      <zs-checkbox value="b">
        <view class="p-r-20rpx">
          选项二
        </view>
      </zs-checkbox>
      <zs-checkbox value="C">
        <view class="p-r-20rpx">
          选项二
        </view>
      </zs-checkbox>
    </zs-checkbox-group>
  </view>

  <view class="module-title">
    默认选中
  </view>
  <view class="p-x-20px">
    <zs-checkbox-group v-model="checkbox4">
      <zs-checkbox value="a" checked @change="checkboxChange">
        <view class="p-r-20rpx">
          选项一
        </view>
      </zs-checkbox>
      <zs-checkbox value="b">
        <view class="p-r-20rpx">
          选项二
        </view>
      </zs-checkbox>
    </zs-checkbox-group>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import zsCheckboxGroup from '@/components/checkbox-group/checkbox-group.vue'
import zsCheckbox from '@/components/checkbox/checkbox.vue'

const checkbox1 = ref('')
const checkbox2 = ref('')
const checkbox3 = ref('')
const checkbox4 = ref('')

function checkboxChange(e: any) {
  console.log('checkbox1Change', e)
}
</script>
