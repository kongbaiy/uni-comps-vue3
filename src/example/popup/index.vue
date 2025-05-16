<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="group-cols-3">
    <zs-button type="primary" @click="popupVisible1 = true">
      顶部位置
    </zs-button>
    <zs-button type="primary" @click="popupVisible2 = true">
      底部位置
    </zs-button>
    <zs-button type="primary" @click="popupVisible3 = true">
      左边位置
    </zs-button>
    <zs-button type="primary" @click="popupVisible4 = true">
      右边位置
    </zs-button>
    <zs-button type="primary" @click="popupVisible5 = true">
      居中位置
    </zs-button>
  </view>

  <popup
    v-model="popupVisible1"
    position="top"
    radius="0"
    :show-close-icon="false"
    show-mask
    mask-close
  >
    <view style="height: 200px;">
      popup
    </view>
  </popup>

  <popup
    v-model="popupVisible2"
    show-mask
  >
    <view style="height: 200px;">
      popup
    </view>
  </popup>

  <popup
    v-model="popupVisible3"
    position="left"
    show-mask
  >
    <view style="height: 200px;">
      popup
    </view>
  </popup>
  <popup
    v-model="popupVisible4"
    position="right"
    show-mask
  >
    <view style="height: 200px;">
      popup
    </view>
  </popup>
  <popup
    v-model="popupVisible5"
    position="center"
    show-mask
  >
    <view style="width:200px;height: 200px;">
      popup
    </view>
  </popup>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import zsButton from '../../components/button/button.vue'

const popupVisible1 = ref<boolean>(false)
const popupVisible2 = ref<boolean>(false)
const popupVisible3 = ref<boolean>(false)
const popupVisible4 = ref<boolean>(false)
const popupVisible5 = ref<boolean>(false)
</script>
