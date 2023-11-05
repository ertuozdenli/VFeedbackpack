
![v-feedback](./src/assets/images/v-feedback-logo.svg)

**Fully customizable multi-question feedback component with diverse question types.**

v-feedback is a Vue 3 plugin that provides feedback and interaction features for your Vue.js applications. It allows you to easily integrate feedbacks into your web applications.

## Installation

You can install the v-feedback plugin using npm or yarn.

```bash
npm install v-feedback@latest
```

Import the plugin

```javascript
import { createApp } from 'vue'
import vFeedback from 'v-feedback'

const app = createApp(App)
app.use(vFeedback)
```



Use in your Vue App
```html
<v-feedback :options="options" :questions="questions">
```

**[Demo Page is available here](https://ertuozdenli.github.io/VFeedback/)**

https://github.com/ertuozdenli/VFeedback/assets/29134095/4a3fab04-bc08-4c64-97b1-f25466727f43


## Options 🤩
You can use the provided options object to customize the appearance and behavior of a user interface element.
```javascript
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
  minimizedIconColor: '#ffffff',
  buttonLabelColor: '#ffffff',
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
```

## Questions 🚀
There are 3 types of questions; 
 - multiple-choice
 - emoji
 - rate

```javascript
const options = ref([
  {
    type: 'multiple-choice',
    label: 'Did you liked v-feedback?',
    options: ['Yes!', 'No', 'Enjoyed 🤩']
  },
  {
    type: 'emoji',
    label: 'Did you liked v-feedback emoji type question?'
  },
  {
    type: 'rate',
    label: 'Did you liked v-feedback rate type question?'
  }
])
```

## Emits ⚡️
There are 2 emits;
1. **@answered**
It's returns answered question with answer.
2. **@done**
It's triggered end of questions and returns whole questions and answers 

>**Answer value is an option index**

```html
<VFeedback :options="options" :questions="questions" @answered="answered" @done="done">
```

## Slots ✅
You can customize minimized icon with slot.

```html
  <VFeedback :options="options" :questions="questions" @answered="answered" @done="done">
    <template #icon>
      <img src="http://127.0.0.1:5173/VFeedback/src/assets/images/v-feedback-logo.svg" alt="Icon">
    </template>
  </VFeedback>
```

## Licence
[MIT]