import manifest from '../manifest.config'
import { writeFile } from 'fs/promises'
import { resolve } from 'path'
import type { Plugin } from 'vite'

const FILE_NAME = 'manifest.json'
const BUILD_PATH = 'dist'

const buildManifest = async () => {
  const file = resolve(__dirname, '..', BUILD_PATH, FILE_NAME)

  await writeFile(file, JSON.stringify(manifest, undefined, 2))
  console.info('✓ manifest.json is created.')
}

export const viteBuildManifest: () => Plugin = () => ({
  name: 'vite-build-manifest',
  apply: 'build',
  enforce: 'pre',
  closeBundle: buildManifest,
})
