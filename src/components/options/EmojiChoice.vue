<script setup lang="ts">
import { ref, watch } from 'vue'
import icon0 from '@/components/icons/emojis/IconEmoji0.vue'
import icon1 from '@/components/icons/emojis/IconEmoji1.vue'
import icon2 from '@/components/icons/emojis/IconEmoji2.vue'
import icon3 from '@/components/icons/emojis/IconEmoji3.vue'
import icon4 from '@/components/icons/emojis/IconEmoji4.vue'

function getComponent(iconNumber: Number) {
  let comp
  switch (iconNumber) {
    case 0:
      comp = icon0
      break
    case 1:
      comp = icon1
      break
    case 2:
      comp = icon2
      break
    case 3:
      comp = icon3
      break
    case 4:
      comp = icon4
      break
  }
  return comp
}

const selectedRate = ref()

const emit = defineEmits(['selected'])

watch(selectedRate, function () {
  emit('selected', selectedRate.value)
})
</script>

<template>
  <div class="rate">
    <component
      v-for="i = 0 in 4"
      :is="getComponent(i)"
      :key="i"
      :isFilled="i == selectedRate"
      @mouseover="selectedRate = i"
    >
    </component>
  </div>
</template>

<style lang="scss">
.rate {
  svg {
    cursor: pointer;
    margin-right: 10px;
  }
}
</style>
