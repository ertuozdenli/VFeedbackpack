<script setup lang="ts">
import type { Options } from '@/components/types/options'
import type { Question } from '@/components/types/question'

const props = defineProps<{
  options: Options
  questions: Array<Question>
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
  buttonLabelColor: '#fff',
  translateX: '0px',
  translateY: '0px',
  borderColor: '#f0f0f0',
  borderSize: '1px',
  borderType: 'solid',
  noShadow: true,
  shadowColor: '#1a1a1a08'
}

const defaultQuestions = [
  {
    type: 'multi',
    label: 'Did you liked v-feedback?',
    options: ['yes', 'no']
  }
]

const options = { ...defaultOptions, ...props.options }
const questions = props.questions || defaultQuestions
</script>

<template>
  <div id="VFeedback" :class="[options.position, { 'no-shadow': options.noShadow }]">
    {{ questions[0].label }}
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
  --translateX: v-bind(options.translateX);
  --translateY: v-bind(options.translateY);
  --border-color: v-bind(options.borderColor);
  --border-size: v-bind(options.borderSize);
  --border-type: v-bind(options.borderType);
  --shadow-color: v-bind(options.shadowColor);
}
</style>
