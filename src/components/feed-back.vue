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

// Emits
const emit = defineEmits(['answered', 'done'])

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
  if (isFeedbackEnd.value) {
    options.value.active = false
    return
  }

  let index = activeQuestionIndex.value
  let data = {
    questionIndex: activeQuestionIndex.value,
    questionType: questions[index].type,
    answerIndex: answers.value[index]
  }
  emit('answered', data)

  if (activeQuestionIndex.value !== questions.length - 1) {
    activeQuestionIndex.value++
    return
  }

  if (activeQuestionIndex.value === questions.length - 1) {
    let data = questions.map((q, index) => {
      return { ...q, answerIndex: answers.value[index] }
    })
    emit('done', data)
  }

  isFeedbackEnd.value = true
}
</script>

<template>
  <Transition name="slide-fade">
    <div
      id="VFeedback"
      :class="[
        options.position,
        { 'no-shadow': options.noShadow },
        { 'no-border': !options.hasBorder }
      ]"
      v-if="options.active && !options.isMinimized"
    >
      <thankYou v-if="isFeedbackEnd" :label="options.labels.thankYou" />
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
  </Transition>

  <div
    class="trigger"
    :class="[options.position, { active: options.isMinimized }]"
    @click="options.isMinimized = false"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" class="icon">
      <path
        class="fill"
        d="M14.505 5.873C10.568 8.393 8.6 11.43 8.6 14.98c0 1.105.193 1.657.577 1.657l.396-.107c.312-.12.563-.18.756-.18c1.127 0 2.07.41 2.825 1.23c.756.82 1.134 1.83 1.134 3.036c0 1.157-.41 2.14-1.225 2.947c-.816.807-1.8 1.21-2.952 1.21c-1.608 0-2.935-.66-3.98-1.983c-1.043-1.32-1.564-2.98-1.564-4.977c0-2.26.442-4.327 1.33-6.203c.89-1.875 2.244-3.57 4.068-5.085c1.824-1.514 2.988-2.272 3.492-2.272c.336 0 .612.162.828.486c.216.323.324.605.324.845l-.107.288zm12.96 0c-3.937 2.52-5.904 5.556-5.904 9.108c0 1.105.193 1.657.577 1.657l.396-.107c.312-.12.563-.18.756-.18c1.103 0 2.04.41 2.807 1.23c.77.82 1.152 1.83 1.152 3.036c0 1.157-.41 2.14-1.225 2.947c-.816.807-1.8 1.21-2.952 1.21c-1.608 0-2.935-.66-3.98-1.983c-1.043-1.32-1.564-2.98-1.564-4.977c0-2.284.448-4.37 1.35-6.256c.9-1.887 2.255-3.577 4.067-5.067C24.76 5 25.917 4.254 26.42 4.254c.337 0 .613.162.83.486c.215.324.323.606.323.846l-.108.287z"
      ></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
#VFeedback {
  --width: v-bind(options.width);
  --height: v-bind(options.height);
  --padding: v-bind(options.padding);
  --border-radius: v-bind(options.borderRadius);
  --bg-color: v-bind(options.backgroundColor);
  --text-color: v-bind(options.textColor);
  --translateX: v-bind(options.translateX);
  --translateY: v-bind(options.translateY);
  --border-color: v-bind(options.borderColor);
  --border-size: v-bind(options.borderSize);
  --border-type: v-bind(options.borderType);
  --shadow-color: v-bind(options.shadowColor);
  --button-background-color: v-bind(options.buttonBackgroundColor);
  --button-label-color: v-bind(options.buttonLabelColor);
}

.trigger {
  --button-background-color: v-bind(options.buttonBackgroundColor);
  .fill {
    // fill: var(--button-background-color) !important;
    // TODO: Add icon color variable
    // filter: invert(100%);
  }
}
@import '@/assets/VFeedback.scss';
</style>
