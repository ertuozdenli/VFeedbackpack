import type { App, Plugin } from "vue";
import feedback from "./components/feed-back.vue";


export interface VFeedBackOptions {
    color: string;
}

const VFeedback: Plugin = {
    install: (app: App, options?: VFeedBackOptions) => {
        app.component("VFeedback", feedback);
    }
}

export default VFeedback;