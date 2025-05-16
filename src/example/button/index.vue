<template>
  <view class="module-title">
    按钮类型
  </view>
  <div class="group-cols-3">
    <zs-button type="primary">
      Primary
    </zs-button>

    <zs-button type="success">
      Success
    </zs-button>

    <zs-button type="warning">
      Warning
    </zs-button>

    <zs-button type="danger">
      Danger
    </zs-button>

    <zs-button type="stop">
      Stop
    </zs-button>
  </div>

  <view class="module-title">
    镂空按钮
  </view>
  <div class="group-cols-3">
    <zs-button type="primary" plain radius="8rpx">
      Primary
    </zs-button>

    <zs-button type="success" plain>
      Success
    </zs-button>

    <zs-button type="warning" plain>
      Warning
    </zs-button>

    <zs-button type="danger" plain>
      Danger
    </zs-button>

    <zs-button type="stop" plain>
      Stop
    </zs-button>
  </div>

  <view class="module-title">
    警用状态
    <text class="text-sm">
      所有类型禁用状态均为置灰
    </text>
  </view>
  <div class="group-cols-3">
    <zs-button type="primary" disabled plain radius="8rpx">
      Primary
    </zs-button>
  </div>

  <view class="module-title">
    加载状态
  </view>
  <div class="group-cols-3">
    <zs-button type="primary" loading plain radius="8rpx">
      Primary
    </zs-button>
    <zs-button type="success" loading>
      Success
    </zs-button>
  </div>

  <view class="module-title">
    按钮大小
  </view>
  <div class="group-cols-3">
    <zs-button type="primary" size="mini">
      Mini
    </zs-button>
    <zs-button type="success" size="small">
      Small
    </zs-button>
    <zs-button type="warning" size="normal">
      Normal
    </zs-button>
    <zs-button type="danger" size="large">
      Large
    </zs-button>
  </div>

  <view class="module-title">
    块级按钮
  </view>
  <div class="p-x-20px pb-20px">
    <zs-button type="primary" block>
      primary
    </zs-button>
  </div>
</template>

<script lang="ts" setup>
import zsButton from '../../components/button/button.vue'
</script>
