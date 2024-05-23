<template >
  <VBtn
    class="mb-2"
    @click="cleanLogs" >
    Clean logs
  </VBtn>
  <VTable >
    <thead >
      <tr >
        <th class="text-left" >
          Old
        </th>
        <th class="text-left" >
          New
        </th>
        <th class="text-left" >
          Date time
        </th>
      </tr>
    </thead>
    <tbody >
      <tr
        v-for="item, index in reversedLogs"
        :key="index" >
        <td >{{ item.prev }}</td>
        <td >{{ item.new }}</td>
        <td >{{ new Date( item.date ).toLocaleDateString() + ' ' + new Date( item.date ).toLocaleTimeString() }}</td>
      </tr>
    </tbody>
  </VTable>
</template>

<script setup lang="ts" >
import { useAppStore } from '@/store/useAppStore'
import { computed } from 'vue'

const appStore = useAppStore()

const reversedLogs = computed( () => {
  const updatedLogs = JSON.parse( JSON.stringify( appStore.logs ) )
  return updatedLogs.reverse()
} )

const cleanLogs = () => {
  appStore.cleanLogs()
}

</script>

<style lang="sass" >
td
  text-align: left
</style>
