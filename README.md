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

https://github.com/ertuozdenli/VFeedback/assets/29134095/4a3fab04-bc08-4c64-97b1-f25466727f43



Use in your Vue App
```html
<v-feedback :options="options" :questions="questions">
```
