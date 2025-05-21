<template>
  <view class="module-title">
    基础用法
  </view>
  <view class="p-x-20px">
    <zs-form
      ref="form"
      v-model="formData"
      :rules="rules"
      label-width="200rpx"
      label-gap="20px"
      gap="20rpx"
    >
      <zs-form-item label="所属机构" prop="organization" required>
        <input
          v-model="formData.organization"
          type="text"
          placeholder="请选择所属机构"
          class="form-input"
        >
      </zs-form-item>

      <zs-form-item label="姓名" prop="name" required>
        <input
          v-model="formData.name"
          type="text"
          placeholder="请输入姓名"
          class="form-input"
        >
      </zs-form-item>
      <zs-button block type="primary" @click="handleSubmit">
        提交
      </zs-button>

      <zs-button block type="primary" @click="handleReset">
        重置
      </zs-button>
    </zs-form>
  </view>

  <view class="module-title">
    toast 提示
  </view>
  <view class="p-x-20px">
    <zs-form
      ref="form"
      v-model="formData"
      :rules="rules"
      prompt="toast"
      label-width="200rpx"
      label-gap="20px"
      gap="20rpx"
    >
      <zs-form-item label="所属机构" prop="organization" required>
        <input
          v-model="formData.organization"
          type="text"
          placeholder="请选择所属机构"
          class="form-input"
        >
      </zs-form-item>

      <zs-form-item label="姓名" prop="name" required>
        <input
          v-model="formData.name"
          type="text"
          placeholder="请输入姓名"
          class="form-input"
        >
      </zs-form-item>
      <zs-button block type="primary" @click="handleSubmit">
        提交
      </zs-button>

      <zs-button block type="primary" @click="handleReset">
        重置
      </zs-button>
    </zs-form>
  </view>

  <view class="module-title">
    两端对齐
  </view>
  <view class="p-x-20px">
    <zs-form
      ref="form"
      v-model="formData"
      :rules="rules"
      align="justify"
      label-width="200rpx"
      label-gap="20px"
      gap="20rpx"
    >
      <zs-form-item label="所属机构" prop="organization" required>
        <input
          v-model="formData.organization"
          type="text"
          placeholder="请选择所属机构"
          class="form-input"
        >
      </zs-form-item>

      <zs-form-item label="姓名" prop="name" required>
        <input
          v-model="formData.name"
          type="text"
          placeholder="请输入姓名"
          class="form-input"
        >
      </zs-form-item>
      <zs-button block type="primary" @click="handleSubmit">
        提交
      </zs-button>

      <zs-button block type="primary" @click="handleReset">
        重置
      </zs-button>
    </zs-form>
  </view>

  <view class="module-title">
    右对齐
  </view>
  <view class="p-x-20px">
    <zs-form
      ref="form"
      v-model="formData"
      :rules="rules"
      align="right"
      label-width="200rpx"
      label-gap="20px"
      gap="20rpx"
    >
      <zs-form-item label="所属机构" prop="organization" required>
        <input
          v-model="formData.organization"
          type="text"
          placeholder="请选择所属机构"
          class="form-input"
        >
      </zs-form-item>

      <zs-form-item label="姓名" prop="name" required>
        <input
          v-model="formData.name"
          type="text"
          placeholder="请输入姓名"
          class="form-input"
        >
      </zs-form-item>
      <zs-button block type="primary" @click="handleSubmit">
        提交
      </zs-button>

      <zs-button block type="primary" @click="handleReset">
        重置
      </zs-button>
    </zs-form>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import zsButton from '@/components/button/button.vue'
import zsForm from '@/components/form/form.vue'
import zsFormItem from '@/components/form-item/form-item.vue'

const formData = ref<AnyObject>({
  organization: 'organization',
  name: '',
})
const rules: AnyObject = {
  organization: [
    { message: '请输入机构' },
  ],
  name: [
    { message: '请输入择姓名' },
  ],
}
const form = ref()

function handleSubmit() {
  form.value.validate(() => {
  })
}

function handleReset() {
  form.value.resetForm()
}
</script>
