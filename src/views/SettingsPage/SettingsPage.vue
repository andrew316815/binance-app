<template >
  <div >
    <CurrencySelect @update-currency="findOrderBook" />
    <LogsTable />
  </div>
</template>

<script setup lang="ts" >
import { useAppStore } from '@/store/useAppStore'
import CurrencySelect from './parts/CurrencySelect.vue'
import LogsTable from './parts/LogsTable.vue'

const appStore = useAppStore()

const findOrderBook = async ( currency: string ) => {
  console.log( 'testdsf' )
  await appStore.getOrderBook( currency )
}
</script>
