<template>
  <scroll-view v-if="!vertical" scroll-x :style="restyle" :scroll-left="scrollPosition" enable-passive scroll-anchoring
    scroll-with-animation :show-scrollbar="showScrollbar" :enhanced="showScrollbar"
    class="scroll-tab scroll-tab__horizontal">
    <view v-for="item, index in data" :key="item[dataKey!]" class="slot-content"
      @click="handleHorizontalSlotContent(index)">
      <slot :current-data="item" :current-index="index" />
    </view>
  </scroll-view>

  <scroll-view v-else scroll-y :style="restyle" :scroll-top="scrollPosition" enable-passive scroll-anchoring
    scroll-with-animation :show-scrollbar="showScrollbar" :enhanced="showScrollbar"
    class="scroll-tab scroll-tab__vertical">
    <view v-for="item, index in data" :key="item[dataKey!]" class="slot-content"
      @click="handleVerticalSlotContent(index)">
      <slot :current-data="item" :current-index="index" />
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { NodeSelector } from '../common/index'

interface IProps {
  vertical?: boolean
  height?: string
  data?: any[]
  dataKey?: string
  restyle?: string | AnyObject
  showScrollbar?: boolean
}

const props = defineProps<IProps>()
const emits = defineEmits(['change'])

const scrollPosition = ref<number>(0)
const getNode = new NodeSelector()
const scrollTabWidth = ref<number>(0)
const scrollTabHeight = ref<number>(0)
const activeIndex = ref<number>(0)
const scrollMap:Record<string, number> = {}

onMounted(async () => {
  if (!props.vertical) {
    getNode.query('.scroll-tab', (nodeInfo: any) => scrollTabWidth.value = nodeInfo.width)
  } else {
    getNode.query('.scroll-tab', (nodeInfo: any) => scrollTabHeight.value = nodeInfo.height)
  }
})

function handleHorizontalSlotContent(currentIndex: number) {
  activeIndex.value = currentIndex

  if (scrollMap[currentIndex]) {
    scrollPosition.value = scrollMap[currentIndex]
    emits('change', currentIndex)
    return
  }

  getNode.query('.slot-content', (nodeInfo: any) => {
    const value = getHorizontalScrollTabValue(nodeInfo.width, currentIndex)
    scrollPosition.value = value
    scrollMap[currentIndex] = value
  })
  emits('change', currentIndex)
}

function handleVerticalSlotContent(currentIndex: number) {
  activeIndex.value = currentIndex

  if (scrollMap[currentIndex]) {
    scrollPosition.value = scrollMap[currentIndex]
    emits('change', currentIndex)
    return
  }

  getNode.query('.slot-content', (nodeInfo: any) => {
    const value = getVerticalScrollTabValue(nodeInfo.height, currentIndex)
    scrollPosition.value = value
    scrollMap[currentIndex] = value
  })
  emits('change', currentIndex)
}

function getHorizontalScrollTabValue(cellWidth: number, currentIndex: number): number {
  const index = currentIndex + 1
  const baseIndex = Number((scrollTabWidth.value / 2) / cellWidth)
  let value = 0

  if (index >= baseIndex) value = cellWidth * (index - baseIndex)

  return value
}

function getVerticalScrollTabValue(cellHeight: number, currentIndex: number): number {
  const index = currentIndex + 1
  const baseIndex = Number((scrollTabHeight.value / 2) / cellHeight)
  let value = 0

  if (index >= baseIndex) value = cellHeight * (index - baseIndex)

  return value
}

defineExpose({
  data: props.data,
  activeIndex,
})
</script>

<style scoped>
.scroll-tab {
  font-size: 0;
}

.scroll-tab__horizontal {
  white-space: nowrap;
  vertical-align: baseline;
}

.scroll-tab__vertical {
  display: inline-flex;
  width: auto;
  height: v-bind(height);
}

.slot-content {
  overflow: hidden;
}

.scroll-tab__horizontal .slot-content {
  display: inline-block;
}
</style>
