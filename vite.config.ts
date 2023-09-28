import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2';
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      copyDtsFiles: true
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: "src/VFeedback.ts",
      name: 'VFeedback',
      fileName: 'VFeedback',
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/VFeedback.ts")
      },
      external: ['vue'],
      // output: {
      //   assetFileNames: (assetInfo) => {
      //     if (assetInfo.name === 'main.css') return 'VFeedback.css';
      //     return assetInfo.name;
      //   },
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})