<template>
  <view class="title">
    按钮类型
  </view>

  <div class="group">
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

  <view class="title">
    镂空按钮
  </view>

  <div class="group">
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

  <view class="title">
    警用状态
    <text class="text-sm">
      所有类型禁用状态均为置灰
    </text>
  </view>

  <div class="group">
    <zs-button type="primary" plain radius="8rpx">
      Primary
    </zs-button>
  </div>
</template>

<script lang="ts" setup>
import zsButton from '../../components/button/button.vue'
</script>

<style lang="scss" scoped>
.title {
  @apply m-40rpx text-lg text-black;
}

.group {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 110rpx;
  padding: 0 20px;
}
</style>
