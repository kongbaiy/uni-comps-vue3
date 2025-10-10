<template>
  <swiper :current="swiperCurrent" :duration="duration" :vertical="vertical" class="tab-content">
    <swiper-item v-for="item, index in data" :key="index" @touchmove.stop>
      <slot :current-data="item" :current-index="index" />
    </swiper-item>
  </swiper>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import type { VNodeRef } from 'vue'

interface ITabNav {
  activeIndex: number
  data: any[]
}

interface IProps {
  targetRef: VNodeRef & ITabNav
  current?: number
  duration?: number
  vertical?: boolean
  height?: string
}

const props = withDefaults(defineProps<IProps>(), {
  current: 0,
  duration: 500,
  vertical: false,
})

const data = computed<any[]>(() => props.targetRef?.data || [])
const swiperCurrent = ref<number>(props.current)

watch(() => props.targetRef?.activeIndex, (newValue) => {
  const value = Number(newValue)
  if (value || value === 0) swiperCurrent.value = newValue!
}, {
  deep: true,
  immediate: true,
})
</script>

<style scoped>
.tab-content {
  height: v-bind(height);
  background-color: #ddd;
}
</style>
