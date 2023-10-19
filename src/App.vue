<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const positions = [
  { value: 'topLeft', label: 'Top Left' },
  { value: 'topCenter', label: 'Top Center' },
  { value: 'topRight', label: 'Top Right' },
  { value: 'bottomLeft', label: 'Bottom Left' },
  { value: 'bottomCenter', label: 'Bottom Center' },
  { value: 'bottomRight', label: 'Bottom Right' },
  { value: 'center', label: 'Center' }
]
const options = ref({
  position: 'bottomRight',
  hasBorder: false,
  buttonBackgroundColor: '#41B883'
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="row">
          <label for="position" class="form-label">Position</label>
          <select id="position" v-model="options.position" class="form-select">
            <option v-for="(position, index) in positions" :key="index" :value="position.value">
              {{ position.label }}
            </option>
          </select>
        </div>

        <div class="row my-3">
          <label for="position" class="form-label">Button Background Color</label>
          <input type="color" class="w-25" v-model="options.buttonBackgroundColor" />
        </div>
      </div>
      <div class="col">
        <highlightjs class="code" autodetect :code="JSON.stringify(options, null, 2)" />
      </div>
    </div>
  </div>
  <VFeedback :options="options"></VFeedback>
</template>

<style>
@import '@/assets/Sample.scss';
</style>
