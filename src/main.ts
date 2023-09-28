import { createApp } from 'vue'
import App from './App.vue'
import vFeedback from './VFeedback'


const app = createApp(App);
app.use(vFeedback);

app.mount('#app');

