import { createApp } from 'vue'
import App from './App.vue'
import vFeedback from './VFeedback'
import 'highlight.js/styles/stackoverflow-light.min.css'

import hljs from 'highlight.js';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const app = createApp(App);
app.use(hljsVuePlugin);
app.use(vFeedback);

app.mount('#app');

