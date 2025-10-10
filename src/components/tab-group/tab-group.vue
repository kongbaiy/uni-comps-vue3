<template>
  <view v-if="!vertical" class="container container__horizontal">
    <slot />
  </view>

  <view v-else class="container container__vertical">
    <slot />
  </view>
</template>

<script lang="ts" setup>
interface IProps {
  vertical?: boolean
  gap?: string
  height?: string
}

defineProps<IProps>()
</script>

<style scoped>
.container {
  display: grid;
  gap: v-bind(gap);
  height: v-bind(height);
}

.container__horizontal {
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
}

.container__vertical {
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
}
</style>
