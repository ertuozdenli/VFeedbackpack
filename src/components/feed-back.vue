<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
// Types
import type { Options } from '@/components/types/options'
import type { Question } from '@/components/types/question'

// Components
import checkCircle from '@/components/icons/IconCheck.vue'
import thankYou from '@/components/thank-you.vue'

// Defaults
import { defaultOptions } from './defaultOptions'
import { defaultQuestions } from './defaultQuestions'

const props = defineProps<{
  options: Options
  questions: Array<Question>
}>()

let options = ref({ ...defaultOptions, ...props.options })

// Definitions
const questions = props.questions || defaultQuestions
let activeQuestionIndex = ref(0)
let answers = ref<String | Number[]>([])
let isFeedbackEnd = ref<Boolean>(false)

// Watch
watchEffect(() => {
  options.value = { ...defaultOptions, ...props.options }
})

// Computed Properties
const optionSlug = computed(() => {
  return 'option' + activeQuestionIndex.value
})

const buttonLabel = computed(() => {
  let buttonLabel = options.value.labels.buttonNext

  if (activeQuestionIndex.value === questions.length - 1) {
    buttonLabel = options.value.labels.buttonSend
  }

  if (isFeedbackEnd.value) {
    buttonLabel = options.value.labels.buttonClose
  }

  return buttonLabel
})

// Functions
function nextStep() {
  if (activeQuestionIndex.value !== questions.length - 1) {
    activeQuestionIndex.value++
    return
  }
  if (isFeedbackEnd.value) {
    options.value.active = false
    return
  }
  isFeedbackEnd.value = true
}
</script>

<template>
  <div
    id="VFeedback"
    :class="[options.position, { 'no-shadow': options.noShadow }]"
    v-if="options.active"
  >
    <thankYou v-if="isFeedbackEnd" />
    <div class="question" v-if="!isFeedbackEnd">
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
      @click="nextStep()"
    >
      {{ buttonLabel }}
    </button>
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
