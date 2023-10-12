<script setup lang="ts">
import { toRef } from 'vue'
const props = defineProps<{
  checked: Boolean
}>()

const checked = toRef(props, 'checked')
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
    <g fill="#000000">
      <path
        v-if="checked"
        d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415l-7.071 7.07Z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z"
        clip-rule="evenodd"
      ></path>
    </g>
  </svg>
</template>
