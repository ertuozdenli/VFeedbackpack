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
  <!-- Multi Start -->
  <div class="option" v-for="(option, index) in options" :key="index">
    <!-- @click="answers[activeQuestionIndex] = index" -->
    <icon-circle class="check-circle" :checked="activeQuestionAnswerIndex === index"></icon-circle>
    <label :for="optionSlug + index">
      {{ option }}
    </label>
  </div>
  <!-- Multi End -->
</template>

<style scoped>
.option {
  display: block;
  margin-top: 0.2em;
  padding: 3px 0px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: normal;
  cursor: pointer;

  label {
    cursor: pointer;
    flex: 1;
  }
}
</style>
