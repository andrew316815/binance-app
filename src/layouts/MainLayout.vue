<template >
  <HeaderLayout />
  <VMain >
    <VSheet
      color="#FAFAFA"
      class="pa-3 main" >
      <RouterView />
    </VSheet>
  </VMain>
</template>

<script setup lang="ts" >
import HeaderLayout from './parts/HeaderLayout.vue'
</script>
