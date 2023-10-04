import type { App, Plugin } from "vue";
import feedback from "./components/feed-back.vue";

const VFeedback: Plugin = {
    install: (app: App) => {
        app.component("VFeedback", feedback);
    }
}

export default VFeedback;