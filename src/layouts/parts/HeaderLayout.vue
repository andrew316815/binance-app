<template >
  <div class="d-flex" >
    <div class="header-layout__image" >
      <VImg
        src="/src/assets/logo.png"
        :width="100"
        :height="100"
        aspect-ratio="16/9" />
    </div>
    <VBreadcrumbs
      :items="items"
      divider="|" />
  </div>
</template>

<script setup lang="ts" >
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = computed( () => ( [
  {
    title: 'Settings Page',
    disabled: route.name === 'SettingsPage',
    to: {
      name: 'SettingsPage',
    },
  },
  {
    title: 'Order Book',
    disabled: route.name === 'OrderPage',
    to: {
      name: 'OrderPage',
    },
  },
] ) )

</script>

<style lang="sass" >
.header-layout
  &__image
    width: 100px
</style>
