<template>
  <view class="module-title">
    基础用法
  </view>
  <tab-nav :data="tabData" data-key="title">
    <template #default="row">
      <view class="p-x-4rpx">
        <zs-button type="primary">
          {{ row.currentData.title }}{{ row.currentIndex }}
        </zs-button>
      </view>
    </template>
  </tab-nav>

  <view class="module-title">
    纵向
  </view>
  <view class="p-x-20px">
    <tab-nav :data="tabData" data-key="title" vertical height="200px">
      <template #default="row">
        <view class="p-y-4rpx">
          <zs-button type="primary">
            {{ row.currentData.title }}{{ row.currentIndex }}
          </zs-button>
        </view>
      </template>
    </tab-nav>
  </view>

  <view class="module-title">
    组合使用
  </view>
  <view class="p-x-20px">
    <tab-nav ref="navRef" :data="tabData" data-key="title" height="200px">
      <template #default="row">
        <view class="p-y-4rpx">
          <zs-button type="primary">
            {{ row.currentData.title }}{{ row.currentIndex }}
          </zs-button>
        </view>
      </template>
    </tab-nav>
    <tab-content :target-ref="navRef" :duration="0" height="200rpx">
      <template #default="{ currentIndex }">
        <view class="text-base">
          currentIndex: {{ currentIndex }}
        </view>
      </template>
    </tab-content>
  </view>

  <view class="module-title">
    结合容器使用
  </view>
  <view class="p-x-20px">
    <tab-group>
      <tab-nav ref="navRef" vertical :data="tabData" height="200rpx" data-key="title">
        <template #default="row">
          <view class="text-base">
            {{ row.currentData.title }}{{ row.currentIndex }}
          </view>
        </template>
      </tab-nav>
      <tab-content :target-ref="navRef" :duration="0" height="100%">
        <template #default="{ currentIndex }">
          <view class="text-base">
            currentIndex: {{ currentIndex }}
          </view>
        </template>
      </tab-content>
    </tab-group>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import zsButton from '../../components/button/button.vue'
import tabNav from '../../components/tab/nav.vue'
import tabContent from '../../components/tab/content.vue'
import tabGroup from '../../components/tab/group.vue'

const navRef = ref()

const tabData = ref<any[]>([
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
  { title: '笔记本' },
])
</script>
