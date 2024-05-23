<template >
  <VApp
    class="app bg-white w-100"
    v-bind="$attrs" >
    <RouterView />
  </VApp>
</template>

<script setup lang="ts" >
import { onMounted } from 'vue'
import { useAppStore } from '@/store/useAppStore'
import { LogData } from './helpers/types/types'

const appStore = useAppStore()

onMounted( () => {
  const logs = localStorage.getItem( 'logs' )

  if ( logs ) {
    appStore.logs = JSON.parse( logs ) as LogData[]
  }
} )

</script>

<style scoped >
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
