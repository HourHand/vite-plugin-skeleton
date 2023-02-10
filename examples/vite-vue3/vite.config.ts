import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import template from 'vite-plugin-vue-skeleton'
import * as path from 'path'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    template({
      excludes: [],
    }),
    Inspect(),
  ],
  server: {
    port: 8080,
    hmr: true,
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
})
