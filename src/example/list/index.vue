<template>
  <list
    ref="listRef"
    v-model="data"
    :action="action"
    :query="query"
    :response-config="getListResponseConfig"
    height="100vh"
  >
    <view
      v-for="item in data.data"
      :key="item.pk"
      class="list-item"
      @click="handleToDetail"
    >
      {{ item.productAlias }}
    </view>
  </list>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { onShow } from '@dcloudio/uni-app'

import list from '@/components/list/list.vue'

const listRef = ref()
const data = ref<any>({})
const query = reactive({
  page: 1,
  limit: 15,
  statusCode: 2,
})
const firstLoad = ref(true)

watch(data, (newValue) => {
  console.log('newValue: ', newValue)
}, {
  deep: true,
})

onShow(() => {
  if (!firstLoad.value) listRef.value?.reaction()
  firstLoad.value = false
})

function getListResponseConfig(res: any) {
  return {
    pageCount: res.data.page?.page,
    data: res.data?.data,
  }
}

function handleToDetail() {
  uni.navigateTo({
    url: '/example/button/index',
  })
}

async function action(data: any) {
  return uni.request({
    url: 'https://lightsoft.life/k2/invitation/1.0/authRecord',
    header: {
      authorization: 'eyJhbGciOiJIUzI1NiJ9.J89iVrrNAxPLDWD1Iodrl0tTK2rXoodBPoS7FPiNY66xwaFB2lbuliYsyWy6dJOx3gwNlmmEbu88Hej/s6hnWrqTAbERKVv2LECOz/R/nqFQG9JAE+TiwOXByP/+LChiPmbObr3ipKus7E01h+9ytlfY7wtkVNow2bZ/miz5OVJyWNu65XBjedlEzN3tc1Yvm0c2Kbx00+EDhCz9P6owDQpRUzlRYxMu4SdeIpMvP8kiMTnpLuDLuCkiXFWjCq3vGLASJ14oep5zThqz6FVefzO9NugHJ16I5ofmevfS7R2ses7Q5d11GPvblfYOx5LJUgXHu974YtYG4auafJgLNcq3E3dgDRBRBJpM6e7LX2k/MT5Ed7PeHS33Nc1Tme60vJm3kq3iD3O4yxmHXzTYeg==.pqWSJaE5b6vGq_Lsjy3DnMtxYZiAKaF1ldcAfTsffkY',
      sessionId: '1895833905529884672',
    },
    data,
  })
}
</script>

<style lang="scss" scoped>
.list-item {
    margin-top: 1px;
    padding: 20rpx;
    background-color: #ddd;
}
</style>
