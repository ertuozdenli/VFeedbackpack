<script setup lang="ts">
import type { Options } from '@/components/types/options'

const props = defineProps<{
  options: Options
}>()

const defaultOptions: Options = {
  position: 'bottomRight',
  width: '260px',
  height: '200px',
  padding: '15px',
  borderRadius: '10px',
  isMinimized: false,
  showCloseButton: true,
  hasBorder: true,
  backgroundColor: '#fff',
  textColor: '#1a1a1a',
  buttonBackgroundColor: '#41B883',
  buttonLabelColor: '#fff'
}

const options = { ...defaultOptions, ...props.options }
</script>

<template>
  <div id="VFeedback" :class="options.position">
    {{ options.backgroundColor }}
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/VFeedback.scss';
#VFeedback {
  --width: v-bind(options.width);
  --height: v-bind(options.height);
  --padding: v-bind(options.padding);
  --border-radius: v-bind(options.borderRadius);
  --bg-color: v-bind(options.backgroundColor);
}
</style>
