<script setup lang="ts">
import { ref } from 'vue'

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

const options = ref({
  position: 'bottomCenter',
  width: '350px',
  height: '240px',
  padding: '25px',
  borderRadius: '10px',
  isMinimized: false,
  active: true,
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
  labels: { buttonNext: 'Next', buttonSend: 'Send', buttonClose: 'Close' }
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
    <div class="row">
      <div class="col position-relative">
        <label for="position" class="form-label">Position</label>
        <select id="position" v-model="options.position" class="form-select">
          <option v-for="(position, index) in positions" :key="index" :value="position.value">
            {{ position.label }}
          </option>
        </select>

        <div class="my-3">
          <label for="position" class="form-label">Button Background Color</label>
          <input type="color" class="w-25" v-model="options.buttonBackgroundColor" />
        </div>
        <div class="my-3">
          <label for="position" class="form-label">Width</label>
          <input type="number" class="form-control" min="80" max="500" v-model="options.width" />
        </div>
        <div class="my-3">
          <label for="position" class="form-label">Height</label>
          <input type="number" class="form-control" min="80" max="500" v-model="options.height" />
        </div>
      </div>
      <div class="col">
        <span class="title">Options JSON</span>
        <highlightjs class="code" autodetect :code="JSON.stringify(options, null, 2)" />
      </div>
      <div class="col-lg-5">
        <span class="title">Events</span>
        <highlightjs class="code" autodetect :code="events" />
      </div>
    </div>
  </div>
  <VFeedback :options="options" @answered="answered" @done="done"></VFeedback>
</template>

<style>
@import '@/assets/Sample.scss';
</style>
