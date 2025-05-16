<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="group-cols-3">
    <zs-button block type="primary" @click="popupVisible1 = true">
      顶部位置
    </zs-button>
    <zs-button block type="primary" @click="popupVisible2 = true">
      底部位置
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import zsButton from '../../components/button/button.vue'

const popupVisible1 = ref<boolean>(false)
const popupVisible2 = ref<boolean>(false)
</script>
