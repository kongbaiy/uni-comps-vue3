<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
.module-title {
  @apply m-40rpx text-lg text-black;
}

.group-cols-3 {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 110rpx;
  padding: 0 20px;
}
</style>
