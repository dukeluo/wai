import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import { viteBuildManifest } from './scripts/build-manifest'

export default defineConfig({
  plugins: [
    vue(),
    VueTypeImports(),
    banner('@author Huan Luo <dukeluo@outlook.com> (https://shaiwang.life)'),
    viteBuildManifest(),
  ],
  build: {
    chunkSizeWarningLimit: 4096,
  },
})
