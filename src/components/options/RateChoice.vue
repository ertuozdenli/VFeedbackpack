<script setup lang="ts">
import { ref } from 'vue'
import iconStar from '@/components/icons/IconStar.vue'
const selectedRate = ref()
</script>

<template>
  <div class="rate">
    <icon-star
      v-for="i = 1 in 5"
      :key="i"
      :isFilled="i <= selectedRate"
      @mouseover="selectedRate = i"
    >
    </icon-star>
  </div>
</template>

<style lang="scss">
.rate {
  svg {
    cursor: pointer;
  }
}
</style>
