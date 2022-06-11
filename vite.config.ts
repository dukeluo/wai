import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { viteBuildManifest } from './scripts/build-manifest'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueTypeImports(), viteBuildManifest(), cssInjectedByJsPlugin()],
  build: {
    chunkSizeWarningLimit: 4096,
  },
})
