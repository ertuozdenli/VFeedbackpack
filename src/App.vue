<script setup lang="ts">
import { ref, watch } from 'vue'

const positions = [
  { value: 'topLeft', label: 'Top Left' },
  { value: 'topCenter', label: 'Top Center' },
  { value: 'topRight', label: 'Top Right' },
  { value: 'bottomLeft', label: 'Bottom Left' },
  { value: 'bottomCenter', label: 'Bottom Center' },
  { value: 'bottomRight', label: 'Bottom Right' },
  { value: 'center', label: 'Center' }
]

let events = ref<String>('')

const questions = ref([
  {
    type: 'multiple-choice',
    label: 'Did you liked v-feedback, lorem ipsum dolor sit ametus?',
    options: ['yes', 'no']
  },
  {
    type: 'multiple-choice',
    label:
      'Did you liked v-feedback, lorem ipsum dolor sit ametus?Did you liked v-feedback, lorem ipsum dolor sit ametus?Did you liked v-feedback, lorem ipsum dolor sit ametus?',
    options: ['yes', 'no', 'maybe']
  },
  {
    type: 'multiple-choice',
    label: '2.Did you liked v-feedback?',
    options: ['yes', 'no', 'hell no']
  }
])

const options = ref({
  position: 'bottomRight',
  width: '350px',
  height: '240px',
  padding: '25px',
  borderRadius: '10px',
  isMinimized: false,
  active: true,
  showCloseButton: true,
  hasBorder: true,
  backgroundColor: '#ffffff',
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
  labels: {
    buttonNext: 'Next',
    buttonSend: 'Send',
    buttonClose: 'Close',
    thankYou: 'Thank you!'
  }
})

let wrapperWidth = ref('350')

watch(wrapperWidth, () => {
  options.value.width = wrapperWidth.value + 'px'
})

let wrapperHeight = ref('350')

watch(wrapperHeight, () => {
  options.value.height = wrapperHeight.value + 'px'
})

let wrapperPadding = ref('25')

watch(wrapperPadding, () => {
  options.value.padding = wrapperPadding.value + 'px'
})

let wrapperBorderRadius = ref('10')

watch(wrapperBorderRadius, () => {
  options.value.borderRadius = wrapperBorderRadius.value + 'px'
})

let wrapperBorderSize = ref('1')

watch(wrapperBorderSize, () => {
  options.value.borderSize = wrapperBorderSize.value + 'px'
})

let translateX = ref('1')

watch(translateX, () => {
  options.value.translateX = translateX.value + 'px'
})

let translateY = ref('1')

watch(translateY, () => {
  options.value.translateY = translateY.value + 'px'
})

function answered(value: Object) {
  events.value += `Emitted: answered \nEmitted Data: ${JSON.stringify(value)}\n\n`
}
function done(value: Object) {
  events.value += `Emitted: done \nEmitted Data: ${JSON.stringify(value)}\n\n`
}
</script>

<template>
  <div class="container">
    <img class="logo" src="@/assets/images/v-feedback-logo.svg" alt="V-feedback Logo" />
    <p class="text-center my-5">
      Fully customizable multi-question feedback component with diverse question types.
    </p>
    <div class="text-center">
      <highlightjs class="code npm my-5" :code="'npm install v-feedback@latest'" />
      <highlightjs
        language="html"
        class="code npm my-5"
        code='<v-feedback :options="options" :questions="questions">'
      />
    </div>
    <div class="row gap-3 my-5">
      <div class="col position-relative">
        <div class="form-check my-3">
          <input class="form-check-input" type="checkbox" id="isACtive" v-model="options.active" />
          <label class="form-check-label" for="isACtive"> Active </label>
        </div>

        <label for="position" class="form-label">Position</label>
        <select id="position" v-model="options.position" class="form-select">
          <option v-for="(position, index) in positions" :key="index" :value="position.value">
            {{ position.label }}
          </option>
        </select>

        <div class="form-check my-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="isMinimized"
            v-model="options.isMinimized"
          />
          <label class="form-check-label" for="isMinimized"> Minimized </label>
        </div>

        <div class="form-check my-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="showCloseButton"
            v-model="options.showCloseButton"
          />
          <label class="form-check-label" for="showCloseButton"> Show Close Button </label>
        </div>

        <div class="my-3">
          <label class="form-label">Next Button Label</label>
          <input type="text" class="form-control" v-model="options.labels.buttonNext" />
        </div>
        <div class="my-3">
          <label class="form-label">Send Button Label</label>
          <input type="text" class="form-control" v-model="options.labels.buttonSend" />
        </div>
        <div class="my-3">
          <label class="form-label">Close Button Label</label>
          <input type="text" class="form-control" v-model="options.labels.buttonClose" />
        </div>
        <div class="my-3">
          <label class="form-label">Thank You Message</label>
          <input type="text" class="form-control" v-model="options.labels.thankYou" />
        </div>

        <div class="my-3">
          <label for="translateX" class="form-label">Translate X</label>
          <input
            type="range"
            class="form-range"
            id="translateX"
            min="-200"
            max="200"
            v-model="translateX"
          />
        </div>
        <div class="my-3">
          <label for="translateY" class="form-label">Translate Y</label>
          <input
            type="range"
            class="form-range"
            id="translateY"
            min="-200"
            max="200"
            v-model="translateY"
          />
        </div>
        <div class="my-3">
          <label for="position" class="form-label d-block">Background Color</label>
          <input type="color" class="w-25" v-model="options.backgroundColor" />
        </div>
        <div class="my-3">
          <label for="position" class="form-label d-block">Text Color</label>
          <input type="color" class="w-25" v-model="options.textColor" />
        </div>
        <div class="my-3">
          <label for="position" class="form-label d-block">Button Background Color</label>
          <input type="color" class="w-25" v-model="options.buttonBackgroundColor" />
        </div>
        <div class="my-3">
          <label for="position" class="form-label">Width</label>
          <input type="number" class="form-control" v-model="wrapperWidth" />
        </div>
        <div class="my-3">
          <label for="position" class="form-label">Height</label>
          <input type="number" class="form-control" v-model="wrapperHeight" />
        </div>
        <div class="my-3">
          <label for="position" class="form-label">Padding</label>
          <input type="number" class="form-control" v-model="wrapperPadding" />
        </div>
        <div class="form-check my-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="hasborder"
            v-model="options.hasBorder"
          />
          <label class="form-check-label" for="hasborder"> Border </label>
        </div>
        <div class="my-3">
          <label for="position" class="form-label">Border Size</label>
          <input type="number" class="form-control" v-model="wrapperBorderSize" />
        </div>
        <div class="my-3">
          <label for="position" class="form-label">Border Radius</label>
          <input type="number" class="form-control" v-model="wrapperBorderRadius" />
        </div>
        <select class="form-select" v-model="options.borderType">
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
          <option value="double">Double</option>
        </select>
        <div class="my-3">
          <label for="position" class="form-label d-block">Border Color</label>
          <input type="color" class="w-25" v-model="options.borderColor" />
        </div>
        <div class="form-check my-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="noShadow"
            v-model="options.noShadow"
          />
          <label class="form-check-label" for="noShadow"> Remove Shadow </label>
        </div>
        <div class="my-3">
          <label for="position" class="form-label d-block">Shadow Color</label>
          <input type="color" class="w-25" v-model="options.shadowColor" />
        </div>
      </div>
      <div class="col">
        <span class="title">Options JSON</span>
        <highlightjs class="code" autodetect :code="JSON.stringify(options, null, 2)" />
      </div>
      <div class="col-lg-4">
        <span class="title">Events</span>
        <highlightjs class="code" autodetect :code="events" />
      </div>
    </div>
    <div class="text-center my-5">Created by @ertuozdenli with ❤️</div>
  </div>
  <VFeedback
    :options="options"
    :questions="questions"
    @answered="answered"
    @done="done"
  ></VFeedback>
</template>

<style>
@import '@/assets/Sample.scss';
</style>
