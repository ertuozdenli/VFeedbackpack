<script setup lang="ts">
import { ref, watch } from 'vue'
import iconStar from '@/components/icons/IconStar.vue'
const selectedRate = ref()
const emit = defineEmits(['selected'])

watch(selectedRate, function () {
  emit('selected', selectedRate.value)
})
</script>

<template>
  <div class="rate">
    <icon-star
      v-for="(i = 1,index) in 5"
      :key="index"
      :isFilled="index <= selectedRate"
      @mouseover="selectedRate = index"
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
