<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  options?: Array<String>
  activeQuestionIndex?: Number
  activeQuestionAnswerIndex?: Number | String
}>()

// Icons
import iconCircle from '@/components/icons/IconCheck.vue'

// defineComponent({
//   name: 'MultipleChoice'
// })

let options = ref(props.options)
let activeQuestionIndex = ref(props.activeQuestionIndex)

// Computed Properties
const optionSlug = computed(() => {
  return 'option' + activeQuestionIndex.value
})
</script>

<template>
  <div>
    {{  activeQuestionIndex  }} -
    {{  activeQuestionAnswerIndex  }}
    <!-- Multi Start -->
    <div class="option" v-for="(option, index) in options" :key="index">
      <!-- @click="answers[activeQuestionIndex] = index" -->
      <icon-circle class="check-circle" :checked="activeQuestionAnswerIndex === index" />
      <label :for="optionSlug + index">
        {{ option }}
      </label>
    </div>
    <!-- Multi End -->
  </div>
</template>
