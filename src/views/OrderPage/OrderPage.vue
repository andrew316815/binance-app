<template >
  <div
    v-if="!bids.length && !asks.length"
    class="text-h5" >
    You should choose a currency pair first, go to 
    <RouterLink to="/" >
      settings page
    </RouterLink>
  </div>
  <div class="d-flex justify-between" >
    <OrderTable
      :items="bids"
      title="Bids table"
      class="mr-4" />
    <OrderTable
      :items="asks"
      title="Asks table" />
  </div>
</template>

<script setup lang="ts" >
import OrderTable from '@/components/OrderTable.vue'
import { useAppStore } from '@/store/useAppStore'
import { computed } from 'vue'

const appStore = useAppStore()

const bids = computed( () => appStore.reversedBids )
const asks = computed( () => appStore.reversedAsks )

</script>
