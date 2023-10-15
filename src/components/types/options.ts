import type { Labels } from "./labels";

export type Options = {
    // General
    position: String,
    isMinimized: Boolean,
    showCloseButton: Boolean,
    hasBorder: Boolean,
    active: Boolean,
    // Theming
    width: String,
    height: String,
    padding: String,
    borderRadius: String,
    backgroundColor: String,
    textColor: String,
    buttonBackgroundColor: String,
    buttonLabelColor: String,
    translateX: String,
    translateY: String,
    borderColor: String,
    borderSize: String,
    borderType: String,
    shadowColor: String,
    noShadow: Boolean,
    // Internationalization
    labels: Labels
}

