<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
// Types
import type { Options } from '@/components/types/options'
import type { Question } from '@/components/types/question'

// Components
import checkCircle from '@/components/icons/IconCheck.vue'
import thankYou from '@/components/thank-you.vue'

const props = defineProps<{
  options: Options
  questions: Array<Question>
}>()

const defaultOptions: Options = {
  position: 'bottomRight',
  width: '310px',
  height: '200px',
  padding: '25px',
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
  noShadow: false,
  shadowColor: '#1a1a1a08',
  labels: { buttonNext: 'Next', buttonSend: 'Send' }
}

const defaultQuestions: Array<Object> = [
  {
    type: 'multi',
    label: 'Did you liked v-feedback, lorem ipsum dolor sit ametus?',
    options: ['yes', 'no']
  },
  {
    type: 'multi',
    label: '2.Did you liked v-feedback?',
    options: ['yes', 'no', 'hell no']
  }
]

let options = ref({ ...defaultOptions, ...props.options })

watchEffect(() => {
  options.value = { ...defaultOptions, ...props.options }
})

const questions = props.questions || defaultQuestions

const activeQuestionIndex = ref(0)
const answers = ref<String | Number[]>([])

const optionSlug = computed((activeQuestionIndex) => {
  return 'option' + activeQuestionIndex
})

const buttonLabel = computed(() => {
  return activeQuestionIndex.value < questions.length - 1
    ? options.value.labels.buttonNext
    : options.value.labels.buttonSend
})
</script>

<template>
  <div id="VFeedback" :class="[options.position, { 'no-shadow': options.noShadow }]">
    <div class="question">
      <span class="label">{{ questions[activeQuestionIndex].label }}</span>
      <div class="options">
        <div
          class="option"
          v-for="(option, index) in questions[activeQuestionIndex].options"
          :key="index"
          @click="answers[activeQuestionIndex] = index"
        >
          <check-circle class="check-circle" :checked="answers[activeQuestionIndex] === index" />
          <label :for="optionSlug + index">
            {{ option }}
          </label>
        </div>
      </div>
    </div>
    <button
      class="btn btn-next"
      :disabled="typeof answers[activeQuestionIndex] === 'undefined'"
      @click="activeQuestionIndex += 1"
    >
      {{ buttonLabel }}
    </button>
    <thankYou />
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
  --button-background-color: v-bind(options.buttonBackgroundColor);
  --button-label-color: v-bind(options.buttonLabelColor);
}
</style>
