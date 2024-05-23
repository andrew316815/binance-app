<template >
  <VSelect
    v-model="selectedCurrency"
    :items="items"
    variant="solo" 
    label="Choose currency pair" />
</template>

<script setup lang="ts" >
import { useAppStore } from '@/store/useAppStore'
import { onMounted, ref, watch } from 'vue'

const emit = defineEmits( [ 'updateCurrency' ] )

const selectedCurrency = ref<null | string>( null )
const items = [
  'BTCUSDT',
  'BNBBTC',
  'ETHBTC',
]

const appStore = useAppStore()
onMounted( () => {
  if ( appStore.selectedCurrencyPair ) {
    selectedCurrency.value = appStore.selectedCurrencyPair
  } else {
    selectedCurrency.value = 'BTCUSDT'
  }
} )

watch( () => selectedCurrency.value, ( newValue: null | string, oldValue: null | string ) => {
  console.log( 'test' )
  if ( !appStore.selectedCurrencyPair || oldValue ) {
    emit( 'updateCurrency', newValue )
  }
} )

</script>
