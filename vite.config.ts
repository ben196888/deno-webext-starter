import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import react from '@vitejs/plugin-react'
import webExtension from 'vite-plugin-web-extension'
import process from 'node:process'

const target = process.env.TARGET || 'chrome'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: target === 'firefox' ? 'dist/firefox' : 'dist/chrome',
    sourcemap: 'inline',
  },
  plugins: [
    deno(),
    react(),
    webExtension({
      browser: target,
    }),
  ],
})
