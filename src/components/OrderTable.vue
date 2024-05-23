<template >
  <div class="w-50" >
    <div class="text-h6" >
      {{ title }}
    </div>
    <VTable
      class="order-table "
      fixed-header >
      <thead >
        <tr >
          <th class="text-left" >
            Price
          </th>
          <th
            v-if="isDesktop"
            class="text-left" >
            Quantity
          </th>
          <th class="text-left" >
            Total
          </th>
        </tr>
      </thead>
      <tbody >
        <tr
          v-for="item, index in items"
          :key="index" >
          <td >{{ +(+item[0]).toFixed(4) }}</td>
          <td v-if="isDesktop" >
            {{ +(+item[1]).toFixed(4) }}
          </td>
          <td >{{ +( +item[0] * +item[1]).toFixed(4) }}</td>
        </tr>
      </tbody>
    </VTable>
  </div>
</template>

<script setup lang="ts" >
import { CountItem } from '@/helpers/types/types'
import { computed } from 'vue'

defineProps<{
  items: CountItem[];
  title: string;
}>()

const isDesktop = computed( () => window.innerWidth > 800 )

</script>

<style lang="sass" >
.order-table
  max-height: calc( 100vh - 140px)
  
td
  text-align: left
</style>
