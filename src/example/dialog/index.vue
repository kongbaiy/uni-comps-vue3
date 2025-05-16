<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="group-cols-3">
    <zs-button type="primary" @click="dialogVisible1 = true">
      提示弹窗
    </zs-button>
    <zs-button type="primary" @click="dialogVisible2 = true">
      无标题
    </zs-button>
    <zs-button type="primary" @click="dialogVisible3 = true">
      自定义按钮文字
    </zs-button>
  </view>

  <view class="module-title">
    自定义
  </view>
  <view class="group-cols-3">
    <zs-button type="primary" @click="dialogVisible4 = true">
      自定义按钮文字
    </zs-button>
  </view>

  <zs-dialog v-model="dialogVisible1" show-mask title="title">
    content...
  </zs-dialog>
  <zs-dialog v-model="dialogVisible2" show-mask>
    <view class="p-20px">
      content...
    </view>
  </zs-dialog>
  <zs-dialog v-model="dialogVisible3" show-mask confirm-text="提交" cancel-text="取消提交">
    <view class="p-20px">
      content...
    </view>
  </zs-dialog>
  <zs-dialog v-model="dialogVisible4" show-mask confirm-text="提交" cancel-text="取消提交">
    <view class="p-20px">
      content...
    </view>
    <template #footer>
      <view class="flex">
        <zs-button type="primary" class="w-50%" block @click="dialogVisible4 = false">
          确定
        </zs-button>
        <zs-button type="danger" class="w-50%" block @click="dialogVisible4 = false">
          取消
        </zs-button>
      </view>
    </template>
  </zs-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import zsButton from '../../components/button/button.vue'
import zsDialog from '../../components/dialog/dialog.vue'

const dialogVisible1 = ref<boolean>(false)
const dialogVisible2 = ref<boolean>(false)
const dialogVisible3 = ref<boolean>(false)
const dialogVisible4 = ref<boolean>(false)
</script>
